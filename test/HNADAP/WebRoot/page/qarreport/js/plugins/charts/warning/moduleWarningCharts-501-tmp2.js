/**
*Create by Chaos on 2016/11/13
*/
$(function(){
	renderWarningTimesCharts();
	renderWarningTimesLineCharts();
});

function renderWarningTimesCharts(){
	// 机型构成分析-饼图
    var myChart = echarts.init(document.getElementById('warning-times'));

    // 指定图表的配置项和数据
    var option = {
    	    tooltip: {
    	        trigger: 'item',
    	        formatter: "{a} <br/>{b}: {c} ({d}%)"
    	    },
    	    backgroundColor:'#F3F3F3',
    	    series: [
    	        {
    	            name:'机型',
    	            type:'pie',
    	            selectedMode: 'single',
    	            radius: ['0', '50%'],

    	            label: {
    	                normal: {
    	                    position: 'inner'
    	                }
    	            },
    	            labelLine: {
    	                normal: {
    	                    show: false
    	                }
    	            },
    	            data:[
    	                {value:335, name:'787', selected:true,
	    	                itemStyle:{
	                            normal:{
	                                color:'#3DC05A'
	                            }
	                        }
    	                },
    	                {value:300, name:'330',
    	                	itemStyle:{
	                            normal:{
	                                color:'#FF8031'
	                            }
	                        }	
    	                },
    	                {value:1000, name:'737',
    	                	itemStyle:{
	                            normal:{
	                                color:'#337ACA'
	                            }
	                        }
    	                }
    	            ]            
    	        },
    	        {
    	            name:'机型',
    	            type:'pie',
    	            radius: ['65%', '75%'],

    	            data:[
    	                {value:335, name:'787-8',
    	                	itemStyle:{
	                            normal:{
	                                color:'#4DF49C'
	                            }
	                        }
    	                },
    	                {value:100, name:'A330-200',
    	                	itemStyle:{
	                            normal:{
	                                color:'#F7DD00'
	                            }
	                        }
    	                },
    	                {value:200, name:'A330-300',
    	                	itemStyle:{
	                            normal:{
	                                color:'#FFB000'
	                            }
	                        }
    	                },
    	                {value:400, name:'737-700',
    	                	itemStyle:{
	                            normal:{
	                                color:'#48B3DF'
	                            }
	                        }
    	                },
    	                {value:600, name:'737-800',
    	                	itemStyle:{
	                            normal:{
	                                color:'#40DBF9'
	                            }
	                        }
    	                }
    	            ]
    	        }
    	    ]
    	};

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    
    return myChart;
};

function renderWarningTimesLineCharts(){
	// 警告次数折线图
    var myChart = echarts.init(document.getElementById('warning-times-linechart'));

    // 指定图表的配置项和数据
    var option = {
    	    tooltip: {
    	        trigger: 'axis'
    	    },
    	    legend: {
    	        data:['737','737-700','737-800','330','A330-300','A330-200','787','787-800'],
    	        right:40,
    	        selected:{
    	        	'737-700':false,
    	        	'737-800':false,
    	        	'A330-300':false,
    	        	'A330-200':false,
    	        	'787-800':false
    	        }
    	    },
    	    dataZoom: [{
                startValue: '1月',
                height:20,
            }, {
                type: 'inside'
            }],
    	    xAxis: [
    	        {
    	            type: 'category',
    	            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    	        }
    	    ],
    	    yAxis: [
    	        {
    	            type: 'value',
    	            min: 0,
    	            max: 'dataMax',
    	            axisLabel:{
        	        	formatter:function(value){
        	        		return Math.ceil(value);
        	        	}
        	        }
    	        }
    	    ],
    	    series: [
    	        {
    	            name:'737',
    	            type:'line',
    	            symbolSize:10,
    	            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
    	            itemStyle:{
    	            	normal:{
    	            		color:'#AF0909'
    	            	}
    	            }
    	        },
    	        {
    	            name:'737-700',
    	            type:'line',
    	            symbolSize:10,
    	            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
    	            itemStyle:{
    	            	normal:{
    	            		color:'#839098'
    	            	}
    	            }
    	        },
    	        {
    	            name:'737-800',
    	            type:'line',
    	            symbolSize:10,
    	            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
    	            itemStyle:{
    	            	normal:{
    	            		color:'#8DCDB2'
    	            	}
    	            }
    	        },
    	        {
    	            name:'330',
    	            type:'line',
    	            symbolSize:10,
    	            data:[4.0, 2.9, 4.0, 23.2, 225.6, 176.7, 135.6, 12.2, 32.6, 20.0, 16.4, 13.3],
    	            itemStyle:{
    	            	normal:{
    	            		color:'#DCCC03'
    	            	}
    	            }
    	        },
    	        {
    	            name:'A330-300',
    	            type:'line',
    	            symbolSize:10,
    	            data:[21.6, 15.9, 9.0, 126.4, 28.7, 70.7, 75.6, 82.2, 4.7, 118.8, 6.0, 12.3],
    	            itemStyle:{
    	            	normal:{
    	            		color:'#0B7AAF'
    	            	}
    	            }
    	        },
    	        {
    	            name:'A330-200',
    	            type:'line',
    	            symbolSize:10,
    	            data:[2.0, 21.2, 3.3, 41.5, 61.3, 10.2, 20.3, 23.4, 23.0, 16.5, 112.0, 6.2],
    	            itemStyle:{
    	            	normal:{
    	            		color:'#A60AC3'
    	            	}
    	            }
    	        },
    	        {
    	            name:'787',
    	            type:'line',
    	            symbolSize:10,
    	            data:[21.0, 41.9, 7.0, 213.2, 25.6, 76.7, 135.6, 62.2, 32.6, 120.0, 16.4, 3.3]
    	        },
    	        {
    	            name:'787-800',
    	            type:'line',
    	            symbolSize:10,
    	            data:[82.6, 45.9, 29.0, 6.4, 128.7, 7.7, 175.6, 12.2, 48.7, 18.8, 64.0, 2.3]
    	        }
    	    ]
    	};

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    return myChart;
};