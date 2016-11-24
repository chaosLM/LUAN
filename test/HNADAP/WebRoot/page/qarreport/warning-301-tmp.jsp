<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
//警告事件按飞机场报表固定参数
String orgId = request.getParameter("orgId");//公司参数
String dateTypeId = request.getParameter("dateTypeId");//日期类型参数
String dateId = request.getParameter("dateId");//日期值参数
String airportType = request.getParameter("airportType");//机场类型
String airportId = request.getParameter("airportId");//机场id
String specialAptType = request.getParameter("specialAptType");//特殊机场
String alertType = request.getParameter("alertType");//警告类型参数
String alertId = request.getParameter("alertId");//警告编号参数
%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<base href="<%=basePath %>">
	<title>警告W301</title>
	<link rel="stylesheet" type="text/css" href="page/qarreport/css/reset.css">
	<link rel="stylesheet" type="text/css" href="page/qarreport/css/style.css">
</head>
<body>
    <input type="hidden" name="dateTypeId" id ="dateTypeId" value="<%=dateTypeId %>">
    <input type="hidden" name="dateId" id ="dateId" value="<%=dateId %>">
    <input type="hidden" name="orgId" id ="orgId" value="<%=orgId %>">
    <input type="hidden" name="airportType" id ="airportType" value="<%=airportType %>">
    <input type="hidden" name="airportId" id ="airportId" value="<%=airportId %>">
    <input type="hidden" name="specialAptType" id ="specialAptType" value="<%=specialAptType %>">
    <input type="hidden" name="alertType" id ="alertType" value="<%=alertType %>">
    <input type="hidden" name="alertId" id ="alertId" value="<%=alertId %>">
	<!-- 警告事件按飞行员统计 begin -->
	<div class="warpper">
		<div class="warning-header">
			<h2>警告事件按飞机场统计</h2>
		</div>
		<div class="warning-content">
			<!-- 飞行员警告次数排名 begin -->
				<div class="warning-control">
					<h3>机场警告发生次数排名</h3>
					<div class="warning-table">
					</div>
				</div>
			<!-- 飞行员警告次数排名 end -->
			
			<!-- 触发警告事件趋势 begin -->
				<div class="warning-event">
					<h3>
						<img src="page/qarreport/images/warning-event-h3-img.png" alt="">
						<span><i class='alert-pilot-name'></i>&nbsp;&nbsp;警告事件构成分析</span>	
					</h3>
					<div id="warning-event" style="height: 200px;width: 795px"></div>
				</div>
			<!-- 触发警告事件趋势 end -->
			
			<!-- 触发警告次数趋势 begin -->
				<div class="warning-times">
					<h3>
						<img src="page/qarreport/images/warning-h3-img.png" alt="">
						<span><i class='alert-pilot-name'></i>&nbsp;&nbsp;触发警告次数趋势分析</span>						
					</h3>
					<div id="warning-times" style="height: 200px;width:765px"></div>
				</div>
			<!-- 触发警告次数趋势 end -->
			
			<!-- 触发警告千次数趋势 begin -->
				<div class="warning-rate">
					<h3>
						<img src="page/qarreport/images/warning-h3-img.png" alt="">
						<span><i class='alert-pilot-name'></i>&nbsp;&nbsp;触发警告千次数趋势分析</span>	
					</h3>
					<div id="warning-rate" style="height: 200px;width:765px"></div>
				</div>
			<!-- 触发警告千次数趋势 end -->

		</div>
	</div>
	<!-- 警告事件按飞行员统计 end -->
</body>
<script src="page/qarreport/js/plugins/echarts.js" type="text/javascript"></script>
<script src="page/qarreport/js/plugins/jquery-1.10.1.min.js" type="text/javascript"></script>
<script src="js/laypage/laypage.js" type="text/javascript"></script>
<script type="text/javascript" src="js/core/sea.js"></script>
<script src="page/qarreport/js/warning301/warning-airport-echarts.js" type="text/javascript"></script>
<script type="text/javascript">

/*分页*/
	// var nums = 2; //每页出现的数量
	// var pages = Math.ceil(data.length/nums); //得到总页数
	//调用分页
	//
	//
	//
	//
	seajs.config({
		base: '/HNADAP/page/qarreport/',
		alias: {
			//基础库
			'warning': 'js/warning301/warning'
		}
	});
	seajs.use('warning', function(warning) {
		var reportParams = {
			orgId: $("#orgId").val(), dateType: $("#dateTypeId").val(), dateId: $("#dateId").val(), airportType: $("#airportType").val(),  airportId: $("#airportId").val(), specialAptType: $("#specialAptType").val(),
			alertId: $("#alertId").val(), alertType:$("#alertType").val(), pageIndex: '1', pageSize: '10', sortField: '', sortVal: ''
		};
		warning({
			$el: $('.warning-table'),
			params: reportParams,
			defaultConfig:{
				tableHeadDom:[
								{
								    className: 'table-head',
								    html: '<th width="107" rowspan="2" class="dark-blue"><div class="pilot-team">机场</div></th>'+
								    '<th colspan="3" class="blue" style="background-position:-20px center">警告次数</th>'+
								    '<th></th>'+
								    '<th colspan="3" class="bg-left blue" style="background-position:-20px center">警告千次率</th>'+
								    '<th></th>'
								},
								{
								    className: 'table-head table-head-height',
								    html: '<th width="82" data-sort="desc" data-id="alert_cnt_sort" class="light-blue border-R">排名</th>'+
								    '<th width="82" data-sort="desc"  data-id="alert_cnt_ty" class="light-blue sort-down">本期</th>'+
								    '<th width="82" data-sort="desc" data-id="alert_cnt_ly" class="light-blue">同期</th>'+
								    '<th width="82" data-sort= "desc" data-id="alert_cnt_cmprbl" class="light-blue border-R">同比</th>'+
								    '<th width="82" data-sort="desc" data-id="alert_rate_sort" class="light-blue border-R">排名</th>'+
								    '<th width="82" data-sort="desc" data-id="alert_rate_ty" class="light-blue">本期</th>'+
								    '<th width="82" data-sort="desc" data-id="alert_rate_ly" class="light-blue">同期</th>'+
								    '<th width="82" data-sort="desc" data-id="alert_rate_cmprbl" class="light-blue border-color-blue">同比</th>'
								}
				              ]
			}
		});
	});
</script>
</html>