/**
 * Created by Ricky on 2016/11/9.
 */
define(function(require) {

    var charts = require('../moduleEcharts');

    function initWarning(options){
        var defaults = {
            element: null, // 需要接受的dom 对象
            legendData: {},
            xAxisData: {},
            seriesData: {}
        };

        var opts = $.extend(defaults, options);

        var _initWarning = {
            _init: function (opts) {
                $.extend(true, this, opts);
            },
            renderWarningEventConsCharts: function (){
                var that = this;
                var option = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['次数(本期)','次数(同期)','千次率(本期)','千次率(同期)'],
                        right:50,
                        selected: {
                            '千次率(本期)' : false,
                            '千次率(同期)' : false
                        }
                    },
                    dataZoom: [{
                        startValue: '0',
                        height:20,
                    }, {
                        type: 'inside'
                    }],
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '15%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        scale:true,
                        boundaryGap :true,
                        alignWithLabel:true,
                        data: that.xAxisData
                    },
                    yAxis:[
                        {
                            type: 'value',
                            scale: true,
                            min:0,
                            max:'dataMax',
                            // interval: 2,
                        },
                        {
                            type: 'value',
                            scale: true,
                            // name: '',
                            max: 'dataMax',
                            min: 0,
                            splitLine:{
                                show:false
                            },
                            // interval: 20,
                            boundaryGap: [0.2,0.2]
                        }
                    ],
                    series: that.seriesData
                };
                return charts({element: that.element, option: option})['myChart'];
            },
            renderAlertTimesCharts: function () {
                var that = this;
                var option = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: that.legendData,
                        right:30
                    },
                    dataZoom: [{
                        startValue: '0',
                        height:20,
                    }, {
                        type: 'inside'
                    }],
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '15%',
                        containLabel: true
                    },
                    xAxis: that.xAxisData,
                    yAxis: {
                        type: 'value'
                    },
                    series: that.seriesData
                };
                return charts({element: that.element, option: option})['myChart'];
            },
            renderWarningRateCharts: function () {
                var that = this;
                var option = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: that.legendData,
                        right:30
                    },
                    dataZoom: [{
                        startValue: '0',
                        height:20,
                    }, {
                        type: 'inside'
                    }],
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '15%',
                        containLabel: true
                    },
                    xAxis: that.xAxisData,
                    yAxis: {
                        type: 'value',
                        min:0,
                        max:'dataMax',
                        // interval: 2
                    },
                    series: that.seriesData
                };
                return charts({element: that.element, option: option})['myChart'];
            },
            callback: {
                'afterRender': function () {}
            },
            utils: {

            }
        };
        _initWarning._init(opts);
        return _initWarning;
    }
    return initWarning;
});