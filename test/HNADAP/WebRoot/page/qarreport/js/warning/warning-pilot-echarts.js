/* 
* @Author: 德龙
* @Date:   2016-10-17 10:28:14
* @Last Modified by:   德龙
* @Last Modified time: 2016-11-08 20:39:55
*/

function alertEventEcharts(){
	var   chartsFunc = {
	  	    //警告事件构成分析图表
	  	    warningEventConsCharts: function(xAxisData, seriesData){
                    var mychart3 = echarts.init(document.getElementById('warning-event'));
						mychart3.setOption({
							tooltip: {
						        trigger: 'axis',
						    },
						    legend: {
						        data:['次数(本期)','次数(同期)','千次率(本期)','千次率(同期)'],
						        right:50,
						        selected: {
						            '千次率(本期)' : false,
						            '千次率(同期)' : false
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
						         //data: ['701','702','703','704','705','706','707','708','709','802','803','804','805','806','807']
						         data: xAxisData
						    },
						    yAxis:[
						    	{
							        type: 'value',
							        scale: true,
							        min:0,
							        max:10,
							        interval: 2,
						    	},
						    	{
						    		type: 'value',
						            scale: true,
						            // name: '',
						            max: 100,
						            min: 0,
						            interval: 20,
						            boundaryGap: [0.2,0.2]
						    	}
						    ],
						    /*series: [
						        {
						        	name:'次数(本期)',
						        	type:'bar',
						        	data:[4.5,3.8,3.5,3,2.8,2.5,2.3,2.1,1.8,1.7,1.5,1.4,1.3,1.2,1.1],
						        	itemStyle:{
						            	normal:{
						            		color:'#0672DE',
						            	},
						            }
						        },
						        {
						        	name:'次数(同期)',
						        	type:'bar',
						        	data:[3.6,3.3,2.4,2.2,1.6,1.5,2,1.8,1.2,2.2,1.5,1,0.8,0.4,0.5],
						        	itemStyle:{
						            	normal:{
						            		color:'#FEE600',
						            	},
						            }
						        },
						        {
						            name:'千次率(本期)',
						            type:'line',  
						            yAxisIndex: 1,       
						            data:[60, 68, 75, 93, 85,62, 42, 50,45,40,20,40,36,35,30],
						            itemStyle:{
						            	normal:{
						            		color:'#009EE8',
						            	},
						            }
						        },
						        {
						            name:'千次率(同期)',
						            type:'line',
						            yAxisIndex: 1,
						            data:[56, 40, 62, 85,62, 50, 38, 49,58,39,52,35,33,31,30],
						            itemStyle:{
						            	normal:{
						            		color:'#B7B7B2',
						            	},
						            }
						        }
						    ]*/
						    series: seriesData
						});
					return mychart3;		  	     
            },
	  	    //警告次数图表
	  	    alertTimesCharts: function(legendData, xAxisData, seriesData){
	  	    	var myChart1 = echarts.init(document.getElementById('warning-times'));
					 myChart1.setOption({
					    tooltip: {
					        trigger: 'axis'
					    },
					    legend: {
					    	//data: ["2016年", "2015年"],
					        data: legendData,
					        right:30
					    },
					    grid: {
					        left: '3%',
					        right: '4%',
					        bottom: '3%',
					        containLabel: true
					    },
					    /*xAxis: {
					        type: 'category',
					        name:'月', 
					        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
					        //data: xAxisData
					    },*/
					    xAxis: xAxisData,
					    yAxis: {
					        type: 'value',
					    },
					    /*series: [
					        {
					            name:'2016年',
					            type:'line', 
					            stack:'myChart1',        
					            data:[60, 68, 75, 93, 85,62, 42, 51],
					            itemStyle:{
					            	normal:{
					            		color:'#009EE8',
					            	},
					            }
					        },
					        {
					            name:'2015年',
					            type:'line',
					            // yAxisIndex: 1,
					            data:[56, 40, 62, 85,62, 50, 38, 49,58,39,52,35],
					            itemStyle:{
					            	normal:{
					            		color:'#90C829',
					            	},
					            }
					        }
					    ]*/
					    series: seriesData

					});
	  	    },
	  	    //警告千次率图表
	  	    warningRateCharts: function(legendData, xAxisData, seriesData){
                var myChart2 = echarts.init(document.getElementById('warning-rate'));
					myChart2.setOption({
					    tooltip: {
					        trigger: 'axis'
					    },
					    legend: {
					        //data:['2016年','2015年'],
					        data: legendData,
					        right:30
					    },
					    grid: {
					        left: '3%',
					        right: '4%',
					        bottom: '3%',
					        containLabel: true
					    },
						/*xAxis: {
					        type: 'category',
					        // name:'月',
					        //data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
					          data: xAxisData,
					    },*/
					    xAxis: xAxisData,
					    yAxis: {
					        type: 'value',
					        min:0,
					        max:10,
					        interval: 2,
					    },
					    /*series: [
					        {
					            name:'2016年',
					            type:'line',         
					            data:[6, 6.8, 7.5, 9.3, 8.5,6.2, 4.2, 5],
					            itemStyle:{
					            	normal:{
					            		color:'#009EE8',
					            	},
					            }
					        },
					        {
					            name:'2015年',
					            type:'line',
					            // yAxisIndex: 1,
					            data:[5.6, 4.0, 6.2, 8.5,6.2, 5.0, 3.8, 4.9,5.8,3.9,5.2,3.5],
					            itemStyle:{
					            	normal:{
					            		color:'#90C829',
					            	},
					            }
					        }

					    ]*/
                        series: seriesData
						});
	  	    }
	};
	return chartsFunc;
};
