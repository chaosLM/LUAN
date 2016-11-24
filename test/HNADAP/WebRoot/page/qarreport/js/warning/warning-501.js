/**
*Create by Chaos on 2016/11/14
*/
define(function(require){
	var wecharts = require("../plugins/charts/warning/moduleWarningCharts-501");
	
	/**
	 * 初始化图形化组件
	 */
	function initWarning(options){
		var defaults = {
				$el:null, //需要接收的dom
				chart:null, //图表
				urls:{
					//alertEventConsChart: '/HNADAP/queryAlertEventConsPilotService.do', //警告事件构成分析 url
					alertEventConsChart: '/HNADAP/jsontemplate/warning-501-1.json', //警告事件构成分析 url
					//alertRateChartUrl: '/HNADAP/queryAlertRatePilotService.do'   //警告千次率趋势分析 url
					alertRateChartUrl: '/HNADAP/jsontemplate/warning-501-2.json'   //警告千次率趋势分析 url
				},
				clickTitleShow:{
					$el:$(".alert-id")
				},
				params:{}
		};
		
		var opts=$.extend(defaults,options);
		
		var _initWarning = {
				/**
				 * 初始化
				 * @param opts
				 */
				_init:function(opts){
					var that = $.extend(true,this,opts);
					this.render();
				},
				render:function(){
					this.loadAlertEventConsChart(this.params);
				},
				/**
				 * 柱状图
				 * @param params
				 */
				loadAlertEventConsChart:function(params){
					var that=this;
					that.utils.load(that.urls.alertEventConsChart, params, function(data){
	                    var xAxisData = null;
	                    xAxisData = data[4].alerts;
	                    var seriesData =[];
	                    $.each(data, function(i,el){
	                        switch (i)
	                        {
	                            case 0:
	                                seriesData.push({
	                		        	name:el.name,
	                		        	type:'bar',
	                		        	barWidth:16,
	                		        	data:el.data,
	                		        	itemStyle:{
	                		            	normal:{
	                		            		color:'#2CCBA2',
	                		            	},
	                		            }
	                		        });
	                                break;
	                            case 1:
	                                seriesData.push({
	                		        	name:el.name,
	                		        	type:'bar',
	                		        	barWidth:16,
	                		        	data:el.data,
	                		        	itemStyle:{
	                		            	normal:{
	                		            		color:'#C3C2BD',
	                		            	},
	                		            }
	                		        });
	                                break;
	                            case 2:
	                                seriesData.push({
	                		            name:el.name,
	                		            type:'line',  
	                		            yAxisIndex: 1,       
	                		            data:el.data,
	                		            itemStyle:{
	                		            	normal:{
	                		            		color:'#FE6919',
	                		            	},
	                		            }
	                		        });
	                                break;
	                            case 3:
	                                seriesData.push({
	                		            name:el.name,
	                		            type:'line',
	                		            yAxisIndex: 1,
	                		            data:el.data,
	                		            itemStyle:{
	                		            	normal:{
	                		            		color:'#C3C2BD',
	                		            	},
	                		            }
	                		        });
	                                break;
	                        }
	                    });
	                    that.chart = wecharts({
	                                    element:$('#warning-event'),
	                                    xAxisData: xAxisData,
	                                    seriesData: seriesData
	                                }).renderWarningEventCharts();
	                    that._mychartClick(params,data);   // 警告事件柱形图点击事件
	                });
				},
				/**
				 * 折线图
				 * @param params
				 */
				loadAlertRateChart:function(params){
					var that=this;
					that.utils.load(that.urls.alertRateChartUrl, params, function(data){
						var xAxisData = null;
	                    xAxisData = data[1].alerts;
	                    var seriesData =[];
	                    seriesData.push({
	                        name: data[0].name,
	                        type: 'line',
	                        data: data[0].data,
	                        markLine: {
	                            silent: true,
	                            data: [{
	                                yAxis: 2
	                            }, {
	                                yAxis: 4
	                            }, {
	                                yAxis: 8
	                            }]
	                        }
	                    });
	                    that.chart = wecharts({
	                        element:$('#warning-rate'),
	                        xAxisData: xAxisData,
	                        seriesData: seriesData
	                    }).renderWarningRateCharts();
					});
				},
				/**  
		        *  警告事件柱形图 点击事件
		        */
			    _mychartClick : function(params, data) {
					var that = this;
					var _params = params; // 重新定义一个内部变量_params
	
					_params.alertId = data[4].alerts[0]; // 取到第一个_params.alertId的值
	
					that.loadAlertRateChart(_params); // 警告次数数据加载
	
					that.clickTitleShow.$el.text(_params.alertId); // 警告事件和警告次数标题添加_params.alertId
	
					that.chart.on('click', function(b) {
						if (b.componentType === 'series') { // 判断echarts 点击图形组件名称
							if (b.seriesType === 'bar') { // 判断 echarts点击图形组件的类型名称
								params.alertId = b.name;
								that.loadAlertRateChart(params);
								that.clickTitleShow.$el.text(params.alertId); // 警告事件和警告次数标题添加_params.alertId
							}
						}
					});
			    },
				/**
				 * 回调
				 */
				callback:{
					'afterRender':function(){}
				},
				/**
				 * 工具函数
				 */
				utils:{
					load:function(uri,data,call){
						$.ajax({
							url:uri,
							type:'POST',
							dataType:'json',
							data:data, // 参数
							success:function(data){
								if(data){
									call(data);
								}
							}
						});
					}
				}
		};
		_initWarning._init(opts);
		return _initWarning;
	};
	return initWarning;
});