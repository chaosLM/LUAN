<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
//警告事件按飞行员报表固定参数
String orgId = request.getParameter("orgId");//公司参数
String dateType = request.getParameter("dateType");//日期类型参数
String dateId = request.getParameter("dateId");//日期值参数
String fleetId = request.getParameter("fleetId");//机队编号参数
String pilotId = request.getParameter("pilotId");//飞行员编号参数
String pilotRole = request.getParameter("pilotRole");//机组角色参数
String alertType = request.getParameter("alertType");//警告类型参数
String alertId = request.getParameter("alertId");//警告编号参数
%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<base href="<%=basePath %>>">
	<title>警告W201</title>
	<link rel="stylesheet" type="text/css" href="page/qarreport/css/reset.css">
	<link rel="stylesheet" type="text/css" href="page/qarreport/css/style.css">
</head>
<body>
    <input type="hidden" name="dateType" id ="dateType" value="<%=dateType %>">
    <input type="hidden" name="dateId" id ="dateId" value="<%=dateId %>">
    <input type="hidden" name="orgId" id ="orgId" value="<%=orgId %>">
    <input type="hidden" name="fleetId" id ="fleetId" value="<%=fleetId %>">
    <input type="hidden" name="pilotId" id ="pilotId" value="<%=pilotId %>">
    <input type="hidden" name="pilotRole" id ="pilotRole" value="<%=pilotRole %>">
    <input type="hidden" name="alertType" id ="alertType" value="<%=alertType %>">
    <input type="hidden" name="alertId" id ="alertId" value="<%=alertId %>">
	<!-- 警告事件按飞行员统计 begin -->
	<div class="warpper">
		<div class="warning-header">
			<h2>警告事件单机型分析</h2>
		</div>
		<div class="warning-content warning-pilot">
			<!-- 飞行员警告次数排名 begin -->
				<div class="warning-control">
					<h3>飞行员警告次数排名</h3>
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
<script src="page/qarreport/js/warning201/warning-pilot-echarts.js" type="text/javascript"></script>
<script type="text/javascript">

	seajs.config({
		base: '/HNADAP/page/qarreport/',
		alias: {
			//基础库
			'warning': 'js/warning201/warning'
		}
	});
	seajs.use('warning', function(warning) {
		var reportParams = {
			orgId: $("#orgId").val(), dateType: $("#dateType").val(), dateId: $("#dateId").val(), fleetId: $("#fleetId").val(),  pilotId: $("#pilotId").val(), pilotRole: $("#pilotRole").val(),
			alertId: $("#alertId").val(), alertType:$("#alertType").val(), pageIndex: '1', pageSize: '10', sortField: '', sortVal: ''
		};
		warning({
			$el: $('.warning-table'),
			 /*
             * 定义显示列数，字段名必填
             */
            columns:[
                {name:'pilot_name', className:'font-weight gray border-right', call: function(e){ return e.slice(0, 11); }},
                {name:'fleet_name', className:'gray border-color-darkBlue', call: function(e){ return e;}},
                {name:'alert_cnt_ty', className:'', call: function(e){ return e; }},
                {name:'alert_cnt_ly', className:'', call: function(e){ return e; }},
                {name:'alert_cnt_cmprbl', className:'border-color-blue', call: function(e){ return (e * 100) + '%'; }},
                {name:'alert_rate_ty', className:'', call: function(e){ return e; }},
                {name:'alert_rate_ly', className:'', call: function(e){ return e; }},
                {name:'alert_rate_cmprbl', className:'border-color-darkBlue', call: function(e){ return (e * 100) + '%'; }}
            ],
            params: reportParams,
            defaultsConfig:{
                tableHeadDom: [
                    {
                        className: 'table-head',
                        html: '<th width="120" rowspan="2" class="border-right dark-blue"><div class="pilot-name">姓名</div></th>'+
                        '<th width="120" rowspan="2" class="dark-blue"><div class="pilot-team">机队</div></th>'+
                        '<th colspan="3" class="blue">警告次数</th>'+
                        '<th colspan="3" class="bg-left blue">警告千次率</th>'
                    },
                    {
                        className: 'table-head table-head-height',
                        html: '<th width="87" data-sort="desc"  data-id="alert_cnt_ty" class="light-blue sort-up">本期</th>'+
                        '<th width="87" data-sort="desc" data-id="alert_cnt_ly" class="light-blue">同期</th>'+
                        '<th width="87" data-sort= "desc" data-id="alert_cnt_cmprbl" class="light-blue border-R">同比</th>'+
                        '<th width="87" data-sort="desc" data-id="alert_rate_ty" class="light-blue">本期</th>'+
                        '<th width="87" data-sort="desc" data-id="alert_rate_ly" class="light-blue">同期</th>'+
                        '<th width="87" data-sort="desc" data-id="alert_rat_cmprbl" class="light-blue border-color-blue">同比</th>'
                    }
                ]
            }
		});
	});
</script>
</html>