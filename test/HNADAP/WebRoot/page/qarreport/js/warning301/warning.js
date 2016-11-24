define(function() {
	/* 初始化 */
	function initWarning(options) {
		/* 参数 */
		var defaults = {
			$el : null,
			cacheData : {},
			totalPages:0,
			currPages:0,
			chart:null,
			params : {
				orgId : '9', // 组织id
				dateType : '周', // 日期类型
				dateId : '2016006', // 日期值
				airportType : 'ALL',
				airportId : 'ALL',
				specialAptType : 'ALL',
				alertId : '101',
				alertType : 'A',
				pageIndex : '1',
				pageSize : '10',
				sortField : '',
				sortVal : ''
			},
			urls : {
				tableUrl: '/HNADAP/queryAlertEventAirportService.do', //警告次数表格
				alertEventConsChart : '/HNADAP/queryAlertEventConsAirportService.do', // 警告事件构成分析
				//alertEventConsChart1 : '/HNADAP/jsontemplate/test1.json', // 警告事件构成分析
				alertTimeChartUrl : '/HNADAP/queryAlertCntAirportService.do', // 警告次数趋势分析
				alertRateChartUrl : '/HNADAP/queryAlertRateAirportService.do' // 警告千次率趋势分析
			},
			columns:[
			        {name:'airport_id',className:'font-weight gray border-color-darkBlue',call:function(e){return e/*.slice(0,11)*/;}},
			        {name:'alert_cnt_sort',className:'',call:function(e){return e;}},
			        {name:'alert_cnt_ty',className:'',call:function(e){return e;}},
			        {name:'alert_cnt_ly',className:'',call:function(e){return e;}},
			        {name:'alert_cnt_cmprbl',className:'border-color-blue',call:function(e){return (e*100).toFixed(0)+'%';}},
			        {name:'alert_rate_sort',className:'',call:function(e){return e;}},
			        {name:'alert_rate_ty',className:'',call:function(e){return e;}},
			        {name:'alert_rate_ly',className:'',call:function(e){return e;}},
			        {name:'alert_rate_cmprbl',className:'',call:function(e){return (e*100).toFixed(0)+'%';}}
			        ],
			defaultConfig:{
				tableHeadDom:[
								{
								    className: 'table-head',
								    html: '<th width="120" rowspan="2" class="dark-blue"><div class="airport-name">机场</div></th>'+
								    '<th colspan="3" class="blue">警告次数</th>'+
								    '<th></th>'+
								    '<th colspan="3" class="bg-left blue">警告千次率</th>'+
								    '<th></th>'
								},
								{
								    className: 'table-head table-head-height',
								    html: '<th width="87" data-sort="desc" data-id="alert_cnt_sort" class="light-blue border-R">排名</th>'+
								    '<th width="87" data-sort="desc"  data-id="alert_cnt_ty" class="light-blue sort-down">本期</th>'+
								    '<th width="87" data-sort="desc" data-id="alert_cnt_ly" class="light-blue">同期</th>'+
								    '<th width="87" data-sort= "desc" data-id="alert_cnt_cmprbl" class="light-blue border-R">同比</th>'+
								    '<th width="87" data-sort="desc" data-id="alert_rate_sort" class="light-blue border-R">排名</th>'+
								    '<th width="87" data-sort="desc" data-id="alert_rate_ty" class="light-blue">本期</th>'+
								    '<th width="87" data-sort="desc" data-id="alert_rate_ly" class="light-blue">同期</th>'+
								    '<th width="87" data-sort="desc" data-id="alert_rate_cmprbl" class="light-blue border-color-blue">同比</th>'
								}
				              ]
			}
		};
		var opts = $.extend(defaults, options);

		var _initWarning = {
			_init : function(opts) {
				var that = $.extend(true, this, opts);
				that._isOneTrClick = true;

				this.render();
				
			},
			render : function() {
				/*临时给值*/
				this.params.orgId = '9';// 组织id
				this.params.dateType = '周';// 日期类型
				this.params.dateId = '2016022';// 日期值
				this.params.airportType = '起飞机场';
				this.params.airportId = 'ALL';
				this.params.specialAptType = 'ALL';
				this.params.alertId = '208';
				this.params.alertType = 'S';
				/*this.loadAlertEventConsChart(ajaxParams);*/
				/*this.loadAlertRateChart(ajaxParams);*/
				/*加载表*/
				var _table=$('<table cellspacing="0" cellpadding="0"></table>');
				this.renderTableHead(_table);
				this.renderTableBody(_table);
				this.renderTableFoot(_table);
				this.$el.append(_table);

			},
			/**
			 * 渲染表头
			 * @param $el
			 */
			renderTableHead:function($el){
				var that=this;
				var _Head=$('<thead>');
				for(var i=0;i<this.defaultConfig.tableHeadDom.length;i++){
					var _d=this.defaultConfig.tableHeadDom[i];
					var _tr=$('<tr class="'+_d.className+'">');
					_tr.html(_d.html);
					_Head.append(_tr);
				};
				/*表头排序事件*/
				_Head.find('th.light-blue').unbind('click').bind('click',function(){
					if($(this).attr('data-sort')==='desc'){
						$(this).attr('data-sort','asc');
						_Head.find('th.light-blue').removeClass('sort-up');
						_Head.find('th.light-blue').removeClass('sort-down');
						$(this).addClass('sort-up');//?
					}else if($(this).attr('data-sort')==='asc'){
						$(this).attr('data-sort','desc');
						_Head.find('th.light-blue').removeClass('sort-up');
						_Head.find('th.light-blue').removeClass('sort-down');
						$(this).addClass('sort-down');
					};
					
					that.params.sortField=$(this).attr('data-id'); //获取点击元素的id
					that.params.sortVal=$(this).attr('data-sort');//排序方式
					that.renderTableBody($el);//点击排序后，重新渲染表体
				});
				$el.append(_Head);
			},
			/**
			 * 表体
			 */
			renderTableBody:function($el){
				var that=this;
				var _tBody=$el.find('tbody').length===0?$('<tbody>'):$el.find('tbody');
				that.utils.load(that.urls.tableUrl, that.params, function(data){
					
					var result=data.result;
					that.totalPages=data.counts;
					_tBody.html('');//加载数据，清空表体
					
					$.each(result,function(i,obj){
						var _tr=$('<tr>');
						for(var j=0;j<that.columns.length;j++){
							var _c=that.columns[j];
							var _sortIndex=(that.params.pageIndex-1)*10+i+1;//展现的排序序号
							/*遇到sort时，显示展现的排序序号*/
							if(_c.name.substring(_c.name.length-4)==='sort'){
								var _td=$('<td class="'+_c.className+' border-color-blue" title="'+_sortIndex+'">');
								_td.text(_c.call(_sortIndex));
								_tr.append(_td);
							}else{
								var _td=$('<td class="'+_c.className+'" title="'+obj[_c.name]+'">');
								_td.text(_c.call(obj[_c.name]));
								_tr.append(_td);
							}
						}
						_tBody.append(_tr);
						
						/*缓存数据*/
						that.cacheData['tr-'+i]=obj;
						that._bindTableBodyTr(_tr, 'tr-'+i);
						
						if((result.length-1)===i){
							_tr.addClass('last-chlid');//最后一行标记
						}else if(i===0){
							_tr.addClass('side-on');//第一次加载点击第一行
							if(that._isOneTrClick){
								that._isOneTrClick=false;
								_tr.click();
							}
						}
					});									
				});
				$el.append(_tBody);
			},
			/**
			 * 表尾，分页
			 */
			renderTableFoot:function($el){
				var that=this;
				var _tFoot=$('<tfoot>');
				var _tr=$('<tr>');
				var _td=$('<td colspan="'+that.columns.length+'">');
				var _pageDiv=$('<div class="fenye">');
				that.utils.load(that.urls.tableUrl, that.params, function(data){
					
					that.totalPages=data.counts;
					that.utils.pages(_pageDiv, that.totalPages, function(obj,first){
						if(!first){
							that.params.pageIndex=obj.curr;
							that.renderTableBody(that.$el.find('table'));
						}
					});
				});
				
				_td.append(_pageDiv).appendTo(_tr);
				_tFoot.append(_tr);
				$el.append(_tFoot);
				
			},
			/**
			 * 表体事件
			 * @param $el
			 * @param id
			 */
			_bindTableBodyTr:function($el,id){
				var that=this;
				$el.unbind('click').bind('click',function(){
					$(this).parent().find('tr').removeClass('side-on');
					$(this).addClass('side-on');
					
					var _trData=that.cacheData[id]; //获取选择行的数据

					var ajaxParams={
							orgId : that.params.orgId, // 组织id
							dateType : that.params.dateType, // 日期类型
							dateId : that.params.dateId, // 日期值
							airportType : that.params.airportType,
							airportId : _trData.airport_id,
							specialAptType : that.params.specialAptType,
							alertId : that.params.alertId,
							alertType : that.params.alertType
					};
					/*加载柱状图*/
					that.loadAlertEventConsChart(ajaxParams);
					$('.alert-pilot-name').text(_trData.airport_id);
				});
			},
			/**
			 * 警告事件
			 * 
			 * @param params
			 */
			loadAlertEventConsChart : function(params) {
				var that=this;
				this.utils.load(this.urls.alertEventConsChart, params,
						function(data) {
							var xAxisData = null;
							xAxisData = data[4].alerts;
							var seriesData = [];
							$.each(data, function(i, el) {
								switch (i) {
								case 0:
									seriesData.push({
										name : el.name,
										type : 'bar',
										data : el.data,
										itemStyle : {
											normal : {
												color : '#2CCBA2'
											}
										}
									});
									break;
								case 1:
									seriesData.push({
										name : el.name,
										type : 'bar',
										data : el.data,
										itemStyle : {
											normal : {
												color : '#C3C3BB'
											}
										}
									});
									break;
								case 2:
									seriesData.push({
										name : el.name,
										type : 'line',
										data : el.data,
										yAxisIndex : 1,
										itemStyle : {
											normal : {
												color : '#FF681F'
											}
										}
									});
									break;
								case 3:
									seriesData.push({
										name : el.name,
										type : 'line',
										data : el.data,
										itemStyle : {
											normal : {
												color : '#C3C3BB'
											}
										}
									});
									break;
								}
							});
							that.chart=alertEventEcharts().warningEventConsCharts(
									xAxisData, seriesData);
							that.mychartClick(params, data);
						});
			},
			/**
			 * 警告次数 趋势图
			 * 
			 * @param params
			 */
			loadAlertTimeChart : function(params) {
				this.utils.load(this.urls.alertTimeChartUrl, params, function(
						data) {
					var dateType = params.dateType;
					/* 趋势图所需数据 */
					var legendData = [];
					var xAxis = {};
					var xAxisData = [];
					var seriesData = [];
					/* 组装seriesData */
					$.each(data, function(i, el) {
						legendData.push(el.name+"年");
						switch (i) {
						case 0:
							seriesData.push({
								name : el.name + "年",
								type : 'line',
								data : el.data,
								itemStyle : {
									normal : {
										color : '#009EE8',
									}
								}
							});
							break;
						case 1:
							seriesData.push({
								name : el.name + "年",
								type : 'line',
								data : el.data,
								itemStyle : {
									normal : {
										color : '#90C829',
									}
								}
							});
							break;
						case 2:
							seriesData.push({
								name : el.name + "年",
								type : 'line',
								data : el.data,
								itemStyle : {
									normal : {
										color : '#B7B7B2',
									}
								}
							});
							break;
						}
					});
					/* 组装xAxisData */
					xAxis.type = 'category';
					if (dateType === "月") {
						for ( var i = 1; i <= 12; i++) {
							xAxis.name = "月";
							xAxisData.push(i + "月");
						}
					} else if (dateType === "周") {
						for ( var i = 1; i <= 53; i++) {
							xAxis.name = "周";
							xAxisData.push(i + "周");
						}
					}
					;
					xAxis.data = xAxisData;
					alertEventEcharts().alertTimesCharts(legendData, xAxis,
							seriesData);
				});
			},
			/**
			 * 警告千次率 趋势图
			 * @param params
			 */
			loadAlertRateChart:function(params){
				
				this.utils.load(this.urls.alertRateChartUrl, params, function(data){
					var dateType=params.dateType;
					var legendData=[];
					var xAxis={};
					var xAxisData=[];
					var seriesData=[];
					/*组装seriesData*/
					$.each(data,function(i,el){
						legendData.push(el.name+"年");
						switch(i){
						case 0:
							seriesData.push(
									{
							            name:el.name+'年',
							            type:'line',         
							            data:el.data,
							            itemStyle:{
							            	normal:{
							            		color:'#009EE8',
							            	},
							            }
							        }
									);
							break;
						case 1:
							seriesData.push(
									{
							            name:el.name+'年',
							            type:'line',         
							            data:el.data,
							            itemStyle:{
							            	normal:{
							            		color:'#90C829',
							            	},
							            }
							        }
									);
							break;
						case 2:
							seriesData.push(
									{
							            name:el.name+'年',
							            type:'line',         
							            data:el.data,
							            itemStyle:{
							            	normal:{
							            		color:'#B7B7B2',
							            	},
							            }
							        }
									);
							break;
						}
					});
					/*组装xAxis*/
					xAxis.type='category';
					if(dateType==="月"){
						for(var i=1;i<=12;i++){
							xAxis.name="月";
							xAxisData.push(i+"月");
						}
					}else if(dateType==="周"){
						for(var i=1;i<=53;i++){
							xAxis.name="周";
							xAxisData.push(i+"周");
						}
					};
					xAxis.data=xAxisData;
					alertEventEcharts().warningRateCharts(legendData, xAxis, seriesData);
					
				});
			},
			/**
			 * 柱图点击操作
			 * 
			 */
			mychartClick:function(params,data){
				var that=this;
				var cacheEventFirst=data[4].alerts[0];
				params.alertId=cacheEventFirst;
				/*第一次加载，默认第一个数据*/
				this.loadAlertTimeChart(params);
				this.loadAlertRateChart(params);
				/*点击加载*/
				this.chart.on('click',function(param){
					params.alertId=param.name;
					that.loadAlertTimeChart(params);
					that.loadAlertRateChart(params);
				});
			},
			/* 回调 */
			callback : {
				'afterTableBodyTrClick' : function() {
				}
			},
			utils : {
				/**
				 * 分页工具
				 * 
				 * @param $el
				 * @param counts
				 * @param call
				 */
				pages : function($el, counts, call) {
					laypage({
						cont : $el, // 容器
						pages : Math.ceil(counts / 10), // 通过后台拿到的总页数//?
						curr : 1, // 当前页
						skip : true, // 是否开启跳页
						skin : '#34A5DD',
						groups : 4, // 连续显示分页数
						first : '首页', // 首页
						last : '末页', // 尾页
						prev : '上一页', // 上一页
						next : '下一页', // 下一页
						jump : function(obj, first) { // 触发分页后的回调
							call(obj, first);
						}
					});
				},
				/**
				 * 加载数据ajax工具
				 */
				load : function(uri, data, call) {
					$.ajax({
						url : uri,
						type : 'POST',
						dataType : 'json',
						data : data, // 拿到的initParams对象(数据)
						success : function(data) {
							if (data) {
								call(data);
							}
						}
					});
				}
			}
		};
		_initWarning._init(opts);
		return _initWarning;
	}
	return initWarning;
});