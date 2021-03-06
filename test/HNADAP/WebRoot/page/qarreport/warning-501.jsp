<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";

String orgId = request.getParameter("orgId");//公司ID
String dateType = request.getParameter("dateType");//日期类型
String dateId = request.getParameter("dateId");//日期ID
String planeType = request.getParameter("planeType");//机型
String alertType = request.getParameter("alertType");//警告类型
String alertId = request.getParameter("alertId");//警告ID

String orgId_NAME = request.getParameter("orgId_NAME");//公司参数
String dateId_NAME = request.getParameter("dateId_NAME");//日期参数
%>

<!DOCTYPE HTML>
<html>
<head>
<base href="<%=basePath%>">
<meta charset="UTF-8">
<title>警告W501</title>

<link rel="stylesheet" type="text/css"
	href="page/qarreport/css/reset.css">
<link rel="stylesheet" type="text/css"
	href="page/qarreport/css/style501-1.css">

</head>

<body>
	<input type="hidden" name="orgId" id="orgId" value="<%=orgId%>">
	<input type="hidden" name="dateType" id="dateType" value="<%=dateType%>">
	<input type="hidden" name="dateId" id="dateId" value="<%=dateId%>">
	<input type="hidden" name="planeType" id="planeType" value="<%=planeType%>">
	<input type="hidden" name="alertType" id="alertType" value="<%=alertType%>">
	<input type="hidden" name="alertId" id="alertId" value="<%=alertId%>">
	
	<input type="hidden" name="orgId_NAME" id="orgId_NAME" value="<%=orgId_NAME %>">
	<input type="hidden" name="dateId_NAME" id="dateId_NAME" value="<%=dateId_NAME %>">
	
	<!--   警告事件统计分析  begin-->
	<div class="warpper">

		<!-- 标题  begin-->
		<div class="warning-header">
			<div class="warning-header-logo warning-header-logo-hh"></div>
			<h2>
				<i class="plane-type">B737</i>机型&nbsp;&nbsp;警告事件统计分析
			</h2>
			<div class="warning-header-message">
				<span class="company">公司：<b class="company-name">海南航空</b> </span> 
				<span class="rules">|</span> 
				<span class="date">日期：<b class="date-time">2016/11/11</b> </span>
			</div>
		</div>
		<!-- 标题  end-->
		
		<!-- 表体 begin -->
		<div class="warning-content">
			<!-- 指标显示 begin -->
			<div class="warning-index">
				<div class="index-bg">
					<div class="index-name">次数</div>
					<div class="index-val">23</div>
					<div class="index-name-ly">同期</div>
					<div class="index-val-ly">27</div>
				</div>
				<div class="index-bg">
					<div class="index-name">次数</div>
					<div class="index-val">23</div>
					<div class="index-name-ly">同期</div>
					<div class="index-val-ly">27</div>
				</div>
			</div>
			<!-- 指标显示 end -->
			
			<!-- 事件构成-柱状图  begin -->
			<div class="warning-event clearfix">
				<h3>
					<img src="page/qarreport/images/warning-h3-img.png" alt="">
					<span><i class="plane-type">B737</i>&nbsp;&nbsp;高触发警告构成分析</span>
				</h3>
				<div id="warning-event" style="height:300px;width:795px;"></div>
			</div>
			<!-- 事件构成-柱状图  end -->
			
			<!-- 折线图  begin -->
			<div class="warning-rate clearfix">
				<h3>
					<img src="page/qarreport/images/warning-h3-img.png" alt="">
					<span><i class="plane-type">B737</i>&nbsp;&nbsp;<i class="alert-id"></i>千次率波动情况分析</span>
				</h3>
				<div id="warning-rate" style="height:300px;width:795px;"></div>
			</div>
			<!-- 折线图  end -->
			
			<!-- TOP10 begin -->
			<div class="warning-top clearfix">
				<h3>
					<img src="page/qarreport/images/warning-h3-img.png" alt="">
					<span><i class="plane-type">B737</i>&nbsp;&nbsp;警告事件按飞行员统计</span>
				</h3>
				<div class="warning-top-body">
					<div class="top-bg">
						<div class="top-name">TOP 10</div>
						<div class="top-sort-by">按PF</div>
						<div class="top-col1-name">姓名</div>
						<div class="top-col2-name">警告数量</div>
						<table>
							<thead><tr><th width="44px"></th><th width="20px"></th><th width="90px"></th><th width="90px"></th></tr></thead>
							<tbody>
								<tr><td>1</td><td></td><td>高家荣1</td><td>10</td></tr>
								<tr><td>2</td><td></td><td>高家荣2</td><td>9</td></tr>
								<tr><td>3</td><td></td><td>高家荣3</td><td>8</td></tr>
								<tr><td>4</td><td></td><td>高家荣4</td><td>7</td></tr>
								<tr><td>5</td><td></td><td>高家荣5</td><td>6</td></tr>
								<tr><td>6</td><td></td><td>高家荣6</td><td>5</td></tr>
								<tr><td>7</td><td></td><td>高家荣7</td><td>4</td></tr>
								<tr><td>8</td><td></td><td>高家荣8</td><td>3</td></tr>
								<tr><td>9</td><td></td><td>高家荣9</td><td>2</td></tr>
								<tr><td>10</td><td></td><td>高家荣10</td><td>1</td></tr>
							</tbody>
						</table>
					</div>
					<div class="top-bg">
						<div class="top-name" style="background-color:#0DAD67;">TOP 10</div>
						<div class="top-sort-by" style="background-color:#58D89D;">按责任机长</div>
						<div class="top-col1-name" style="background-color:#58D89D;">姓名</div>
						<div class="top-col2-name" style="background-color:#58D89D;">警告数量</div>
						<table style="border:2px solid #58D89D;">
							<thead><tr><th width="44px"></th><th width="20px"></th><th width="90px"></th><th width="90px"></th></tr></thead>
							<tbody>
								<tr><td style="color:#58D89D;">1</td><td></td><td>高家荣1</td><td>10</td></tr>
								<tr><td style="color:#58D89D;">2</td><td></td><td>高家荣2</td><td>9</td></tr>
								<tr><td style="color:#58D89D;">3</td><td></td><td>高家荣3</td><td>8</td></tr>
								<tr><td style="color:#58D89D;">4</td><td></td><td>高家荣4</td><td>7</td></tr>
								<tr><td style="color:#58D89D;">5</td><td></td><td>高家荣5</td><td>6</td></tr>
								<tr><td style="color:#58D89D;">6</td><td></td><td>高家荣6</td><td>5</td></tr>
								<tr><td style="color:#58D89D;">7</td><td></td><td>高家荣7</td><td>4</td></tr>
								<tr><td style="color:#58D89D;">8</td><td></td><td>高家荣8</td><td>3</td></tr>
								<tr><td style="color:#58D89D;">9</td><td></td><td>高家荣9</td><td>2</td></tr>
								<tr><td style="color:#58D89D;">10</td><td></td><td>高家荣10</td><td>1</td></tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<!-- TOP10 end -->
			
		</div>
		<!-- 表体 end -->
		
		<!-- 表尾 begin -->
		<div class="warning-foot clearfix">
			<div class="foot-copyright clearfix">
				<span class="copyright">版权所有©海航航空集团有限公司</span>
				<span class="chart-today">报表生成日期：<b id="dateToday" class="date-today"></b></span>
				<div class="hr"></div>
			</div>
		</div>
		<!-- 表尾 end -->
	</div>
	<!--   警告事件统计分析  end-->
	
</body>
<script src="page/qarreport/js/plugins/echarts.js" type="text/javascript"></script>
<script src="page/qarreport/js/plugins/jquery-1.10.1.min.js" type="text/javascript"></script>
<script type="text/javascript" src="js/core/sea.js"></script>

<script type="text/javascript">
	!function(){
		var _date=new Date();
		var _myDate=_date.getFullYear()+'/'+(_date.getMonth()+1)+'/'+_date.getDate();
		$('#dateToday').html(_myDate);
	}();
	
	seajs.config({
		base:'/HNADAP/page/qarreport/',
		alias:{
			'warning':'js/warning/warning-501'
		}
	});
	seajs.use('warning',function(warning){
		var reportParams={
			orgId:$("#orgId").val(),dateType:$("#dateType").val(),dateId:$("#dateId").val(),planeType:$("#planeType").val(),alertType:$("#alertType").val(),
			alertId:$("#alertId").val()
		};
		//页面头部 改变logo图片
		if ($("#orgId_NAME").val()==='海南航空股份有限公司') {
			$('.warning-header-logo').removeClass('warning-header-logo-bjAirlines').removeClass('warning-header-logo-tjAirlines').addClass('warning-header-logo-hnAirlines');
		}
		else if($("#orgId_NAME").val()==='北京首都航空有限公司'){
			$('.warning-header-logo').removeClass('warning-header-logo-hnAirlines').removeClass('warning-header-logo-tjAirlines').addClass('warning-header-logo-bjAirlines');
		}
		else if($("#orgId_NAME").val()==='天津航空有限责任公司'){
			$('.warning-header-logo').removeClass('warning-header-logo-hnAirlines').removeClass('warning-header-logo-bjAirlines').addClass('warning-header-logo-tjAirlines');
		};
		
		//传参
		warning({
			urls:{
					//alertEventConsChart: '/HNADAP/queryAlertEventConsPilotService.do', //警告事件构成分析 url
					alertEventConsChart: '/HNADAP/jsontemplate/warning-501-1.json', //警告事件构成分析 url
					//alertRateChartUrl: '/HNADAP/queryAlertRatePilotService.do'   //警告千次率趋势分析 url
					alertRateChartUrl: '/HNADAP/jsontemplate/warning-501-2.json'   //警告千次率趋势分析 url
				},
			clickTitleShow:{
				$el:$(".alert-id")
			},
			params:reportParams
		});
	});
</script>
</html>
