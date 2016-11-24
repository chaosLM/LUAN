/**
*Create by Chaos on 2016/11/17
*/
define(function(require){
	
	function initWarning(options){
		
		var defaluts={
				chart:null,
				urls:{
					alertTimesChart:'/HNADAP/jsontemplate/warning-601.json' //机型警告趋势
				},
				params:{},
				lineColor:['#AF0909','#839098','#8DCDB2','#DCCC03','#0B7AAF','#A60AC3'] //默认折线图颜色
		};
		
		var opts=$.extend(defaluts,options);
		
		var _initWarning={
			_init:function(opts){
				var that=$.extend(true,this,opts);
				this.render();
			},
			render:function(){
				this.params.dateType='月';//给个日期类型用于后面判断
				this.loadAlertTimesChart(this.params);
				
			},
			/**
			 * 各机型警告趋势-折线图
			 * @param params
			 */
			loadAlertTimesChart:function(params){
				var that=this;
				var legendData=[];
				var legendSelected={};
				var xAxisData=[];
				var xAxis={};
				var seriesData=[];

				that.utils.load(that.urls.alertTimesChart, params, function(data){
					var _color='';
					$.each(data,function(i,el){
						/*legend组装*/
						legendData.push(el.name);
						/*默认选中大机型，有横杠的为小机型*/
						if(/-/.test(el.name)){
							legendSelected[el.name]=false;
						}else{
							legendSelected[el.name]=true;
						}
						
						/*组装seriesData*/
						if(i<that.lineColor.length){
							_color=that.lineColor[i];
						}else{
							_color='';
						}
						seriesData.push({
							name : el.name,
							type : 'line',
							symbolSize : 10,
							data : el.data,
							itemStyle : {
								normal : {
									color : _color
								}
							}
						});
					});
					
					/*组装xAxis*/
					xAxis.type='category';
					if(params.dateType==='月'){
						xAxis.name='月';
						for(var j=1;j<=12;j++){
							xAxisData.push(j+'月');
						};
					}else if(params.dateType==='周'){
						xAxis.name='周';
						for(var j=1;j<=53;j++){
							xAxisData.push(j+'周');
						}
					};
					xAxis.data=xAxisData;

					that.chart=wecharts({
						element:$('#warning-times-linechart'),
						xAxisData:xAxis,
						legendData:legendData,
						legendSelected:legendSelected,
						seriesData:seriesData
					}).renderWarningTimesLineCharts();
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