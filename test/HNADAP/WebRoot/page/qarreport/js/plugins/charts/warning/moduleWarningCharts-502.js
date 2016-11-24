/**
*Create by Chaos on 2016/11/15
*/
define(function(require){
	
	function initWaring(options){
		var defaults={
				element:null,
				legendData:{},
				xAxisData:{},
				seriesData:{},
				legendSelected:{}
		};
		
		var opts=$.extend(defaults,options);
		
		var _initWarning={
			_init:function(opts){
				var that=$.extend(true,this,opts);
				this.render();
			},
			render:function(){
				this.renderWarningTimesLineCharts();
			},
			renderWarningTimesLineCharts:function(){
				var that=this;
				var option = {
			    	    tooltip: {
			    	        trigger: 'axis'
			    	    },
			    	    legend: {
			    	        data:that.legendData,
			    	        right:40,
			    	        selected:that.legendSelected
			    	    },
			    	    dataZoom: [{
			                startValue: '1月',
			                height:20,
			            }, {
			                type: 'inside'
			            }],
			    	    xAxis: that.xAxisData,
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
			    	    series: that.seriesData
			    	};
				var myChart=echarts.init($(that.element)[0]);
				myChart.setOption(option);
				return myChart;
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
				
			}
		};
		_initWarning._init(opts);
		return _initWarning;
	};
	return initWaring;
});