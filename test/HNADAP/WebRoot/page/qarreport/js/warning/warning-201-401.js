/**
 * Created by Ricky on 16/9/6.
 */
define(function(require){
    var wecharts = require('../plugins/charts/warning/moduleWarningCharts');
    /**======================================================
     * 初始化图表类型下拉组件
     * */
    function initWarning( options ){
        var defaults = {
            $el: null, // 需要接受的jquery dom对象
            totalPages: 0, // 总页码
            currPages: 0, // 当前页
            chart:null,   //图表
            urls:{
                tableUrl: '/HNADAP/queryAlertEventPilotService.do',      //警告次数表格 url
                alertTimeChartUrl: '/HNADAP/queryAlertCntPilotService.do',   //警告次数趋势分析 url
                alertRateChartUrl: '/HNADAP/queryAlertRatePilotService.do',   //警告千次率趋势分析 url
                alertEventConsChart: '/HNADAP/queryAlertEventConsPilotService.do' //警告事件构成分析 url
            },
            /**
             * 表格选中某一行后，把标题显示NAME
             */
            clickTitleShow:{
                $el: null,
                name: ''
            },
            cacheData: {}, //缓存数据  
            /*
             * 定义显示列数，字段名必填
             */
            columns:[
                {name:'pilot_name', className:'font-weight gray border-right', call: function(e){ return e.slice(0, 11); }},
                {name:'fleet_name', className:'gray border-color-darkBlue', call: function(e){ return e;}},
                {name:'alert_cnt_ty', className:'', call: function(e){ return e; }},
                {name:'alert_cnt_ly', className:'', call: function(e){ return e; }},
                {name:'alert_cnt_cmprbl', className:'border-color-blue', call: function(e){ return Math.ceil(e * 100) + '%'; }},
                {name:'alert_rate_ty', className:'', call: function(e){ return e; }},
                {name:'alert_rate_ly', className:'', call: function(e){ return e; }},
                {name:'alert_rate_cmprbl', className:'border-color-darkBlue', call: function(e){ return Math.ce(e * 100) + '%'; }}
            ],
            /**
             * 接受的参数对象
             */
            params: {},
            /**
             * 默认信息配置
             */
            defaultsConfig:{
                tableHeadDom: [ // 表头设置
                    {
                        className: 'table-head',
                        html: '<th width="120" rowspan="2" class="border-right dark-blue"><div class="pilot-name">姓名</div></th>'+
                        '<th width="120" rowspan="2" class="dark-blue"><div class="pilot-team">机队</div></th>'+
                        '<th colspan="3" class="blue">警告次数</th>'+
                        '<th colspan="3" class="bg-left blue">警告千次率</th>'
                    },
                    {
                        className: 'table-head table-head-height',
                        html: '<th width="87" data-sort="desc"  data-id="alert_cnt_ty" class="light-blue sort-up">本期</th>'+
                        '<th width="87" data-sort="desc" data-id="alert_cnt_ly" class="light-blue">同期</th>'+
                        '<th width="87" data-sort= "desc" data-id="alert_cnt_cmprbl" class="light-blue border-R">同比</th>'+
                        '<th width="87" data-sort="desc" data-id="alert_rate_ty" class="light-blue">本期</th>'+
                        '<th width="87" data-sort="desc" data-id="alert_rate_ly" class="light-blue">同期</th>'+
                        '<th width="87" data-sort="desc" data-id="alert_rat_cmprbl" class="light-blue border-color-blue">同比</th>'
                    }
                ]
            }
        };

        var opts = $.extend( defaults, options);   //

        var _initWarning = {
            /**
             * 初始化
             * @private
             */
            _init: function (opts) {
                var that = $.extend(true, this, opts);  //
                that._isOneTrClick = true;
                this.render();
            },
            render: function(){
                var _table = $('<table cellspacing="0" cellpadding="0"></table>');
                this.renderTableHead(_table);
                this.renderTableBody(_table);
                this.renderTableFoot(_table);
                this.$el.append(_table);
            },
            /**
             * 渲染表格头部信息
             * @param $el
             */
            renderTableHead: function($el){
                var that = this;
                var _tHead = $('<thead>');
                for (var i = 0; i < this.defaultsConfig.tableHeadDom.length; i++){
                    var _d = this.defaultsConfig.tableHeadDom[i];
                    var _tr = $('<tr class="'+_d.className+'">');
                    _tr.html(_d.html);
                    _tHead.append(_tr);
                }
                /**
                 * 绑定排序事件
                 */
                _tHead.find('th.light-blue').unbind('click').bind('click', function(){

                    if($(this).attr('data-sort') === 'desc') {   //判断当前点击dom元素上是否有sortVal==='desc'属性
                        $(this).attr('data-sort','asc');      //当前点击dom添加sortVal:'asc'属性(正序)
                        _tHead.find('th.light-blue').removeClass('sort-up');
                        _tHead.find('th.light-blue').removeClass('sort-down');
                        $(this).addClass("sort-down");
                    }else{
                        $(this).attr('data-sort','desc');     //倒序
                        _tHead.find('th.light-blue').removeClass('sort-down');
                        _tHead.find('th.light-blue').removeClass('sort-up');
                        $(this).addClass("sort-up");
                    }

                    that.params.sortField = $(this).attr('data-id');  //当前点击的获取 reportParams里sortField 给id(后台给的参数名称)
                    that.params.sortVal = $(this).attr('data-sort');
                    that.renderTableBody($el);
                });
                $el.append(_tHead);
            },
            /**
             * 渲染表格表体信息
             * @param $el
             */
            renderTableBody: function ($el) {
                var that = this;
                var _tBody = $el.find('tbody').length === 0 ? $('<tbody>') : $el.find('tbody');
                setExportInfo(that.urls.tableUrl, that.params);
                that.utils.load(that.urls.tableUrl, that.params, function(data){
                    var result = data.result; //1表格数据接口 result每页显示数据 对象
                    that.totalPages = data.counts; //表格数据接口 counts总页数对象
                    _tBody.html(''); //加载数据完成后在清楚tbody里的Dom
                    
                    $.each(result, function(i, obj) { //传入result 对象,作为一个方法(i,obj)2个参数,进入each循环

                        var _tr = $('<tr>');
                        for (var j = 0; j < that.columns.length; j++){
                            var _c = that.columns[j];
                            var _td = $('<td class="'+_c.className+'" title="'+obj[_c.name]+'">');
                            _td.text(_c.call(obj[_c.name]));
                            _tr.append(_td);
                        }

                        _tBody.append(_tr);

                        //缓存数据
                        that.cacheData['tr-' + i] = obj;
                        that._bindTableBodyTr(_tr, 'tr-' + i);
                        if(i === 0){    
                            if(that._isOneTrClick){
                                _tr.click();
                                _tr.addClass('side-on');
                                that._isOneTrClick = false;
                            }
                        }
                        if ((result.length - 1) === i) {
                            _tr.addClass('last-child'); //表格最后一行
                        }

                    });
                });
                
                $el.append(_tBody);
            },
            /**
             * 渲染表格表尾信息
             * @param $el
             */
            renderTableFoot: function ($el) {
                var that = this;
                var _tFoot = $('<tfoot>');
                var _tr = $('<tr>');
                var _td = $('<td colspan="'+that.columns.length+'">');
                var _pagesDiv = $('<div class="fenye">');
                setExportInfo(that.urls.tableUrl, that.params);
                that.utils.load(that.urls.tableUrl, that.params, function(data){
                    that.totalPages = data.counts; //表格数据接口 counts总页数对象
                    that.utils.pages(_pagesDiv, that.totalPages, function(obj, first){
                        var _pages = that.totalPages /10;  //得到总页数
                        if(!first){
                            that.params.pageIndex = obj.curr;
                            if (obj.curr <= _pages) {
                               that.renderTableBody(that.$el.find('table'));     
                            }
                            
                        }
                    });
                });
                _td.append(_pagesDiv).appendTo(_tr);
                _tFoot.append(_tr);
                $el.append(_tFoot);
            },
            /**
             * 绑定表体事件
             *
             */
            _bindTableBodyTr: function($el, id){
                var that = this;
                $el.unbind('click').bind('click', function(e){
                    $(this).parent().find('tr').removeClass('side-on');
                    $(this).addClass('side-on');

                    var trData = that.cacheData[id];  //获取数据缓存
                    that.clickTitleShow.$el.text(trData[that.clickTitleShow.name]).attr('title',trData[that.clickTitleShow.name]);   //echart h3 动态显示飞行员姓名

                    var ajaxParams = {};
                    for (var key in trData){
                        var _names = key.split('_');
                        var _name = _names[0];
                        for (var i = 1; i < _names.length; i++){
                            _name += _names[i].substring(0, 1).toUpperCase() + _names[i].substring(1);
                        }
                        ajaxParams[_name] = trData[key];
                    }

                    that.loadAlertEventConsChart(ajaxParams);
                   
                    that.callback.afterTableBodyTrClick();  //回调函数
                });
            },
            /*
            *  警告事件柱形图
            *  点击事件
             */
            _mychartClick:function(params,data){  
                var that = this;                
                var _params =  params;   //重新定义一个内部变量_params

                _params.alertId = data[4].alerts[0];  //取到第一个_params.alertId 的值

                that.loadAlertTimeChart(_params);      // 警告事件构成数据加载
                that.loadAlertRateChart(_params);     //  警告次数数据加载
            
               $('.chart-alertId').text(_params.alertId);   //警告事件和警告次数标题添加 _params.alertId

                that.chart.on('click',function(b){                 
                    if (b.componentType === 'series') {     //判断echarts 点击图形组件名称
                        if (b.seriesType === 'bar') {       //判断 echarts 点击图形组件的类型名称
                            // alert(1);
                            params.alertId = b.name;                           
                            that.loadAlertTimeChart(params);
                            that.loadAlertRateChart(params);

                            $('.chart-alertId').text(params.alertId);  //警告事件和警告次数标题添加 _params.alertId
                        }                         
                    }
                });
            },
            /**
             * 警告事件构成数据加载
             * @param data
             */
            loadAlertEventConsChart: function(params){
                var that = this;
                setExportInfo(this.urls.alertEventConsChart, params);
                this.utils.load(this.urls.alertEventConsChart, params, function (data) {
                    var xAxisData = null;
                    xAxisData = data[4].alerts;
                    var seriesData =[];
                    $.each(data, function(i,el){
                        switch (i)
                        {
                            case 0:
                                seriesData.push({
                                    name: el.name,
                                    type:'bar',
                                    data: el.data,
                                    itemStyle:{
                                        normal:{
                                            color:'#2CCBA2'
                                        }
                                    }
                                });
                                break;
                            case 1:
                                seriesData.push({
                                    name: el.name,
                                    type:'bar',
                                    data: el.data,
                                    itemStyle:{
                                        normal:{
                                            color:'#C3C3BB'
                                        }
                                    }
                                });
                                break;
                            case 2:
                                seriesData.push(
                                    {
                                        name: el.name,
                                        type:'line',
                                        data:el.data,
                                        yAxisIndex: 1,
                                        itemStyle:{
                                            normal:{
                                                color:'#FF681F'
                                            }
                                        }
                                    }
                                );
                                break;
                            case 3:
                                seriesData.push({
                                    name: el.name,
                                    type:'line',
                                    data: el.data,
                                    itemStyle:{
                                        normal:{
                                            color:'#C3C3BB'
                                        }
                                    }
                                });
                                break;
                        }
                    });
                    that.chart = wecharts({
                                    element:$('#warning-event'),
                                    xAxisData: xAxisData,
                                    seriesData: seriesData
                                }).renderWarningEventConsCharts();
                    that._mychartClick(params,data);   // 警告事件柱形图点击事件
                });
            },
            /**
             * 警告次数数据加载
             * @param data
             */
            loadAlertTimeChart: function(params){
                var that = this;
                setExportInfo(this.urls.alertTimeChartUrl, params);
                this.utils.load(this.urls.alertTimeChartUrl, params, function (data) {
                    //legendData, xAxisData, seriesData
                    var dateType = params.dateType;
                    // alert(dateTypeId);
                    //组装年份数据
                    var legendData = [];
                    var xAxis = {};
                    var xAxisData = [];
                    var seriesData = [];
                    $.each(data, function(i, el) {
                        legendData.push("" + el.name + "年");
                        switch (i){
                            case 0:
                                seriesData.push(
                                    {
                                        name: "" + el.name + "年",
                                        type: 'line',
                                        data: el.data,
                                        itemStyle:{
                                            normal:{
                                                color:'#009EE8'
                                            }
                                        }
                                    }
                                );
                                break;
                            case 1:
                                seriesData.push(
                                    {
                                        name: "" + el.name + "年",
                                        type: 'line',
                                        data: el.data,
                                        itemStyle:{
                                            normal:{
                                                color:'#90C829'
                                            }
                                        }
                                    }
                                );
                                break;
                            case 2:
                                seriesData.push(
                                    {
                                        name: "" + el.name + "年",
                                        type: 'line',
                                        data: el.data,
                                        itemStyle:{
                                            normal:{
                                                color:'#B7B7B2'
                                            }
                                        }
                                    }
                                );
                                break;
                        }
                    });
                    //组装x轴数据 xAxisData
                    xAxis.type = 'category';
                    if (dateType === "月") {
                        xAxis.name = "月";
                        for (var j = 1; j <= 12; j++) {
                            xAxisData.push("" + j + "");
                        }
                    } else if (dateType === "周") {
                        xAxis.name = "周";
                        for (var j = 1; j <= 53; j++) {
                            xAxisData.push("" + j + "");
                        }
                    }
                    xAxis.data = xAxisData;
                    wecharts({
                        element:$('#warning-times'),
                        legendData:legendData,
                        xAxisData: xAxis,
                        seriesData: seriesData
                    }).renderAlertTimesCharts();
                });
            },
            /**
             * 警告千次率数据加载
             * @param data
             */
            loadAlertRateChart: function(params){
            	setExportInfo(this.urls.alertRateChartUrl, params);
                this.utils.load(this.urls.alertRateChartUrl, params, function (data) {
                    var dateType = params.dateType;
                    var legendData = [];
                    var xAxis ={};
                    var xAxisData = [];
                    var seriesData = [];
                    $.each(data,function(i,el){
                        legendData.push(""+el.name+"年");
                        switch (i)
                        {
                            case 0:
                                seriesData.push(
                                    {
                                        name: "" + el.name + "年",
                                        type: 'line',
                                        data: el.data,
                                        itemStyle:{
                                            normal:{
                                                color:'#009EE8'
                                            }
                                        }
                                    }
                                );
                                break;
                            case 1:
                                seriesData.push(
                                    {
                                        name: "" + el.name + "年",
                                        type: 'line',
                                        data: el.data,
                                        itemStyle:{
                                            normal:{
                                                color:'#90C829'
                                            }
                                        }
                                    }
                                );
                                break;
                            case 2:
                                seriesData.push(
                                    {
                                        name: "" + el.name + "年",
                                        type: 'line',
                                        data: el.data,
                                        itemStyle:{
                                            normal:{
                                                color:'#B7B7B2'
                                            }
                                        }
                                    }
                                );
                                break;
                        }
                    });
                    //组装x轴数据 xAxisData
                    xAxis.type = 'category';
                    if (dateType === "月") {
                        xAxis.name = "月";
                        for (var i = 1; i <=12; i++) {
                            xAxisData.push(""+ i );

                        }
                    }else if(dateType==="周"){
                        xAxis.name = "周";
                        for (var i = 1; i <= 53; i++) {
                            xAxisData.push(""+ i );

                        }
                    }
                    xAxis.data =xAxisData;
                    wecharts({
                        element:$('#warning-rate'),
                        legendData:legendData,
                        xAxisData: xAxis,
                        seriesData: seriesData
                    }).renderWarningRateCharts();
                });
            },
            /**
             * 回调函数
             */
            callback: {
                'afterTableBodyTrClick': function(){}
            },
            /**
             * 工具函数
             */
            utils: {
                /**
                 * 分页工具
                 * @param $el
                 * @param counts
                 * @param call
                 */
                pages: function ($el, counts, call) {
                    var _pages = counts / 10;    //得到页数
                    if (_pages < 1) {            //只有一页
                        _pages = 1;
                    }
                    laypage({
                        cont: $el, //容器
                        pages: _pages, //通过后台拿到的总页数
                        curr: 1, //当前页
                        skip: true, //是否开启跳页
                        skin: '#34A5DD',
                        groups: 4, //连续显示分页数
                        first:'首页',  //首页
                        last:'末页',   //尾页
                        prev:'上一页',    //上一页
                        next:'下一页',	   //下一页
                        jump: function(obj, first){ //触发分页后的回调
                            call(obj, first);
                        }
                    });
                },
                /**
                 * 加载数据ajax工具
                 */
                load: function(uri, data, call){
                    $.ajax({
                        url: uri,
                        type: 'POST',
                        dataType: 'json',
                        data: data, //拿到的initParams对象(数据)
                        success: function (data) {
                            if(data){
                                call(data);
                            }
                        }
                    });
                }
            }
        };
        _initWarning._init( opts );
        return _initWarning;
    }
    return initWarning;
});