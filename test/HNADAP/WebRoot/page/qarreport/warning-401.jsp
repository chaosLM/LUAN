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

String orgId_NAME = request.getParameter("orgId_NAME");//公司参数
String dateType_NAME = request.getParameter("dateType_NAME");//日期类型参数
String dateId_NAME = request.getParameter("dateId_NAME");//日期值参数
String fleetId_NAME = request.getParameter("fleetId_NAME");//机队编号参数
String pilotId_NAME = request.getParameter("pilotId_NAME");//飞行员编号参数
String pilotRole_NAME = request.getParameter("pilotRole_NAME");//机组角色参数
String alertType_NAME = request.getParameter("alertType_NAME");//警告类型参数
String alertId_NAME = request.getParameter("alertId_NAME");//警告编号参数
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
    
	<input type="hidden" name="dateType_NAME" id ="dateType_NAME" value="<%=dateType_NAME %>">
    <input type="hidden" name="dateId_NAME" id ="dateId_NAME" value="<%=dateId_NAME %>">
    <input type="hidden" name="orgId_NAME" id ="orgId_NAME" value="<%=orgId_NAME %>">
    <input type="hidden" name="fleetId_NAME" id ="fleetId_NAME" value="<%=fleetId_NAME %>">
    <input type="hidden" name="pilotId_NAME" id ="pilotId_NAME" value="<%=pilotId_NAME %>">
    <input type="hidden" name="pilotRole_NAME" id ="pilotRole_NAME" value="<%=pilotRole_NAME %>">
    <input type="hidden" name="alertType_NAME" id ="alertType_NAME" value="<%=alertType_NAME %>">
    <input type="hidden" name="alertId_NAME" id ="alertId_NAME" value="<%=alertId_NAME %>">
	<!-- 警告事件按机队统计 begin -->
	<div class="warpper">
		<!-- 警告事件页面头部 begin-->
		<div class="warning-header">
			<div class="warning-header-logo warning-header-logo-hh"></div>
			<h2>警告事件按机队统计</h2>
			<div class="warning-header-message">
				<span class="company">公司: <b class="company-name"><%=orgId_NAME %></b></span>
				<span class="rules"> | </span>
				<span class="date">日期: <b class="date-time"><%=dateId_NAME %></b></span>
			</div>
		</div>
		<!-- 警告事件页面头部 end -->
		<div class="warning-content warning-pilot">
			<!-- 机队警告次数排名 begin -->
				<div class="warning-control">
					<h3>机队警告次数排名</h3>
					<div class="warning-table">
					</div>
				</div>
			<!-- 机队警告次数排名 end -->
			<!-- 触发警告事件趋势 begin -->
				<div class="warning-event">
					<h3>
						<img src="page/qarreport/images/warning-event-h3-img.png" alt="">
						<span><i class='alert-fleet-name'></i>&nbsp;&nbsp;全部警告事件构成分析</span>	
					</h3>
					<div id="warning-event" style="height: 300px;width: 795px"></div>
				</div>
			<!-- 触发警告事件趋势 end -->
			<!-- 触发警告次数趋势 begin -->
				<div class="warning-times">
					<h3>
						<img src="page/qarreport/images/warning-h3-img.png" alt="">
						<span><i class='alert-fleet-name'></i>&nbsp;&nbsp;<b class="chart-alertId"></b>警告千次数趋势分析</span>						
					</h3>
					<div id="warning-times" style="height: 300px;width:765px"></div>
				</div>
			<!-- 触发警告次数趋势 end -->
			
			<!-- 触发警告千次数趋势 begin -->
				<div class="warning-rate">
					<h3>
						<img src="page/qarreport/images/warning-h3-img.png" alt="">
						<span><i class='alert-fleet-name'></i>&nbsp;&nbsp;<b class="chart-alertId"></b>警告千次数趋势分析</span>		
					</h3>
					<div id="warning-rate" style="height: 300px;width:765px"></div>
				</div>
			<!-- 触发警告千次数趋势 end -->
		</div>
		<!-- 警告事件页面页脚 begin -->
		<div class="warning-foot">
			<div class="foot-copyright clearfix">
				<span class="copyright">
					版权所有海航航空集团有限公司
				</span>
				<span class="chart-today">
					报表生成日期: <b id="dateToday" class="date-today"></b>
				</span>
			<div class= hr></div>
			</div>		
		</div>
		<!-- 警告事件页面页脚 end -->
	</div>
	<!-- 警告事件按机队统计 end -->
</body>

<script src="page/qarreport/js/plugins/echarts.js" type="text/javascript"></script>
<script src="page/qarreport/js/plugins/jquery-1.10.1.min.js" type="text/javascript"></script>
<script src="js/laypage/laypage.js" type="text/javascript"></script>
<script type="text/javascript" src="js/core/sea.js"></script>
<script src="page/qarreport/js/warning201/warning-pilot-echarts.js" type="text/javascript"></script>
<script type="text/javascript">

	var exp = {};
	function setExportInfo(k, p) {
		exp[k] = p;
	};
	function getExportInfo() {
		return exp;	
	};
	//页面底部获取系统时间
	!function(){
		var _date = new Date();
		var _day = _date.getDate();     //获取系统当前日
		var _mouth = _date.getMonth()+1; //获取系统当前月份
		var _year = _date.getFullYear();  //获取系统当前年份
		var _myDate = document.getElementById('dateToday');
		_myDate.innerHTML = _year+ '/' + _mouth + '/' +  _day;  //得到系统时间
	}();

	seajs.config({
		base: '/HNADAP/page/qarreport/',
		alias: {
			//基础库
			'warning': 'js/warning/warning-201-401'
		}
	});
	seajs.use('warning', function(warning) {
		var reportParams = {
			orgId: $("#orgId").val(), dateType: $("#dateType").val(), dateId: $("#dateId").val(), fleetId: $("#fleetId").val(),  pilotId: $("#pilotId").val(), pilotRole: $("#pilotRole").val(),
			alertId: $("#alertId").val(), alertType:$("#alertType").val(), pageIndex: '1', pageSize: '10', sortField: '', sortVal: ''
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

		warning({
			$el: $('.warning-table'),
			urls:{
				tableUrl: '/HNADAP/queryAlertEventFleetService.do',      //警告次数表格 url
				alertTimeChartUrl: '/HNADAP/queryAlertCntFleetService.do',   //警告次数趋势分析 url
				alertRateChartUrl: '/HNADAP/queryAlertRateFleetService.do',   //警告千次率趋势分析 url
				alertEventConsChart: '/HNADAP/queryAlertEventConsFleetService.do' //警告事件构成分析 url
			},
			 /*
             * 定义显示列数，字段名必填
             */
            columns:[
                // {name:'pilot_name', className:'font-weight gray border-right', call: function(e){ return e.slice(0, 11); }},
                {name:'fleet_name', className:'gray border-color-darkBlue', call: function(e){ return e;}},
                {name:'alert_cnt_ty', className:'', call: function(e){ return e; }},
                {name:'alert_cnt_ly', className:'', call: function(e){ return e; }},
                {name:'alert_cnt_cmprbl', className:'border-color-blue', call: function(e){ 
                	if (!e){
                		return 0 + '%';
                	}else{
                		return Math.ceil(e * 100) + '%'; 
                	}
                }},
                {name:'alert_rate_ty', className:'', call: function(e){ return e; }},
                {name:'alert_rate_ly', className:'', call: function(e){ return e; }},
                {name:'alert_rate_cmprbl', className:'border-color-darkBlue', call: function(e){ 
                	if (!e){
                		return 0 + '%';
                	}else{
                		return Math.ceil(e * 100) + '%'; 
                	}
                }}
            ],
			clickTitleShow:{
				$el: $('.alert-fleet-name'),
				name: 'fleet_name'
			},
            params: reportParams,
            defaultsConfig:{
                tableHeadDom: [
                    {
                        className: 'table-head',
                        html: '<th width="120" rowspan="2" class="dark-blue"><div class="pilot-team">机队</div></th>'+
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