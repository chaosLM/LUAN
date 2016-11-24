<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML>
<html>
<head>
<base href="<%=basePath%>">
<meta charset="UTF-8">
<title>警告W501-2</title>

<link rel="stylesheet" type="text/css"
	href="page/qarreport/css/reset.css">
<link rel="stylesheet" type="text/css"
	href="page/qarreport/css/style501-2.css">

</head>

<body>
	<!--   警告事件按机型对比  begin-->
	<div class="warpper">

		<!-- 标题  begin-->
		<div class="warning-header">
			<div class="warning-header-logo warning-header-logo-hh"></div>
			<h2>
				警告事件按机型对比
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
					<div class="index-name-1">警告次数</div>
					<div class="index-val-1">2815</div>
					<div class="index-name-2">监控航段数</div>
					<div class="index-val-2">6385</div>
					<div class="index-name-3">警告千次率</div>
					<div class="index-val-3">441</div>
				</div>
			</div>
			<!-- 指标显示 end -->
			
			<!-- 警告事件机型构成分析-饼图  begin -->
			<div class="warning-times">
				<h3></h3><h3>警告次数机型构成分析</h3>
				<div id="warning-times" style="height:260px;width:380px;"></div>
			</div>
			<!-- 警告事件机型构成分析-饼图   end -->
			
			<!-- 折线图  begin -->
			<div class="warning-times-linechart clearfix">
				<h3></h3><h3></h3><h3>各机型警告趋势</h3>
				<div class="border-line">
				<div id="warning-times-linechart" style="height:300px;width:800px;"></div>
				</div>
			</div>
			<!-- 折线图  end -->
			
			
		</div>
		<!-- 表体 end -->
		
		<!-- 表尾 begin -->
		<div class="warning-foot">
			<div class="foot-copyright clearfix">
				<span class="copyright">版权所有©海航航空集团有限公司</span>
				<span class="chart-today">报表生成日期：<b id="dateToday" class="date-today"></b></span>
				<div class="hr"></div>
			</div>
		</div>
		<!-- 表尾 end -->
	</div>
	<!--   警告事件按机型对比  end-->
	
</body>
<script src="page/qarreport/js/plugins/echarts.js" type="text/javascript"></script>
<script src="page/qarreport/js/plugins/jquery-1.10.1.min.js" type="text/javascript"></script>
<script type="text/javascript" src="js/core/sea.js"></script>
<script type="text/javascript" src="page/qarreport/js/plugins/charts/warning/moduleWarningCharts-501-tmp2.js"></script>
<script type="text/javascript">
	!function(){
		var _date=new Date();
		var _myDate=_date.getFullYear()+'/'+(_date.getMonth()+1)+'/'+_date.getDate();
		$('#dateToday').html(_myDate);
	}();
</script>
</html>
