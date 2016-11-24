/**
*Create by Chaos on 2016/11/12
*/
define(function(require){
	
	function initWarning(options){
		var defaults={
				element: null, // 需要接受的dom 对象
	            legendData: {},
	            xAxisData: {},
	            seriesData: {}
		};
		
		var opts=$.extend(defaults,options);
		
		var _initWarning={
			_init:function(opts){
				var that=$.extend(true,this,opts);
			},
			/**
			 * 警告构成-柱状图
			 * @returns
			 */
			renderWarningEventCharts:function(){
				var that=this;
				// 指定图表的配置项和数据
			    var option = {
						tooltip: {
					        trigger: 'axis',
					    },
					    legend: {
					        data:['次数(本)','次数(同)','千次率(本)','千次率(同)'],
					        right:50,
					        selected: {
					            '千次率(同)' : true
					        }
					    },
					    grid: {
					        left: '3%',
					        right: '4%',
					        bottom: '3%',
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
						        max:'dataMax'
					    	},
					    	{
					    		type: 'value',
					    		splitLine:{show:false},
					            scale: true,
					            max: 'dataMax',
					            min: 0,
					            boundaryGap: [0.2,0.2]
					    	}
					    ],
					    series: that.seriesData
					};
			    //var myChart = echarts.init(document.getElementById('warning-event'));
			    var myChart = echarts.init($(that.element)[0]);
			    myChart.setOption(option);
			    return myChart;
			},
			/**
			 * 千次率-折线图
			 * @returns
			 */
			renderWarningRateCharts:function(){
				var that=this;
				// 指定图表的配置项和数据
				var option = {
			            tooltip: {
			                trigger: 'axis'
			            },
			            xAxis: {
			                data: that.xAxisData
			            },
			            yAxis: {
			                splitLine: {
			                    show: false
			                }
			            },
			            visualMap: {
			                top: 10,
			                right: 0,
			                pieces: [{
			                    gt: 0,
			                    lte: 2,
			                    color: '#1DAA39'
			                }, {
			                    gt: 2,
			                    lte: 4,
			                    color: '#F7B52B'
			                }, {
			                    gt: 4,
			                    lte: 8,
			                    color: '#FE3B27'
			                }, {
			                    gt: 8,
			                    color: '#5E1984'
			                }],
			                outOfRange: {
			                    color: '#999'
			                }
			            },
			            series: that.seriesData
			        };
			    //var myChart = echarts.init(document.getElementById('warning-event'));
			    var myChart = echarts.init($(that.element)[0]);
			    myChart.setOption(option);
			    return myChart;
			},
			callback:{
				'afterRender':function(){}
			},
			utils:{
				
			}
		};
		_initWarning._init(opts);
		return _initWarning;
	};
	return initWarning;
});