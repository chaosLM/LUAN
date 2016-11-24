/**
 * Created by Ricky on 2016/11/9.
 */
define(function(require) {

    function initEcharts(options){
        var defaults = {
            element: null, // 需要接受的dom 对象
            option: {}, // 需要接受的echart数据
            myChart: null
        };

        var opts = $.extend(defaults, options);

        var _initEcharts = {
            _init: function (opts) {
                var that = $.extend(true, this, opts);
                that.render();
            },
            render: function (){
                var that = this;
                that.myChart = echarts.init($(that.element)[0]);
                that.myChart.setOption(that.option);
                that.callback.afterRender.call(that);
            },
            callback: {
                'afterRender': function () {}
            },
            utils: {

            }
        };
        _initEcharts._init(opts);
        return _initEcharts;
    }
    return initEcharts;
});