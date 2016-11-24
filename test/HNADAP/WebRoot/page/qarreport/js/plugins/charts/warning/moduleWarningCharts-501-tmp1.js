/**
*Create by Chaos on 2016/11/12
*/
$(function(){
	renderWarningEventCharts();
});

function renderWarningEventCharts(){
	// 事件构成柱状图
    var myChart = echarts.init(document.getElementById('warning-event'));

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
		         data: ['701','702','703','704','705','706','707','708','709','802','803','804','805','806','807']
		         //data: xAxisData
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
		    series: [
		        {
		        	name:'次数(本)',
		        	type:'bar',
		        	barWidth:16,
		        	data:[4.5,3.8,3.5,3,2.8,2.5,2.3,2.1,1.8,1.7,1.5,1.4,1.3,1.2,1.1],
		        	itemStyle:{
		            	normal:{
		            		color:'#2CCBA2',
		            	},
		            }
		        },
		        {
		        	name:'次数(同)',
		        	type:'bar',
		        	barWidth:16,
		        	data:[3.6,3.3,2.4,2.2,1.6,1.5,2,1.8,1.2,2.2,1.5,1,0.8,0.4,0.5],
		        	itemStyle:{
		            	normal:{
		            		color:'#C3C2BD',
		            	},
		            }
		        },
		        {
		            name:'千次率(本)',
		            type:'line',  
		            yAxisIndex: 1,       
		            data:[60, 68, 75, 93, 85,62, 42, 50,45,40,20,40,36,35,30],
		            itemStyle:{
		            	normal:{
		            		color:'#FE6919',
		            	},
		            }
		        },
		        {
		            name:'千次率(同)',
		            type:'line',
		            yAxisIndex: 1,
		            data:[56, 40, 62, 85,62, 50, 38, 49,58,39,52,35,33,31,30],
		            itemStyle:{
		            	normal:{
		            		color:'#C3C2BD',
		            	},
		            }
		        }
		    ]
		    //series: seriesData
		};

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    myChart.on('click',function(param){
    	$('.alert-id').text(param.name);
    });
    renderWarningRateCharts();
    return myChart;
};

function renderWarningRateCharts(){
	// 千次率折线图
    var myChart = echarts.init(document.getElementById('warning-rate'));

    // 指定图表的配置项和数据
    var option = {
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: ['0801','0807','0814','0821','0827']
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
            series: {
                name: '千次率',
                type: 'line',
                data: [4,2,1,7,9],
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
            }
        };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    return myChart;
};