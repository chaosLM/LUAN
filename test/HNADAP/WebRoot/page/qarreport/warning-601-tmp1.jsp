<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";

%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<base href="<%=basePath %>>">
	<title>警告W601</title>
	<link rel="stylesheet" type="text/css" href="css/jquery-ui.css">
	<link rel="stylesheet" type="text/css" href="page/qarreport/css/reset.css">
	<link rel="stylesheet" type="text/css" href="page/qarreport/css/style601.css">
</head>
<body>
	<!-- 警告事件明细查询 begin -->
	<div class="warpper">
		<!-- 警告事件页面头部 begin-->
		<div class="warning-header">
			<div class="warning-header-logo warning-header-logo-hnAirlines"></div>
			<h2>警告事件明细查询</h2>
			<div class="warning-header-message">
				<span class="company">公司: <b class="company-name">海航航空</b></span>
				<span class="rules"> | </span>
				<span class="date">日期: <b class="date-time">2016/10</b></span>
			</div>
		</div>
		<!-- 警告事件页面头部 end -->
		<div class="warning-content">
			<!-- 警告事件表格 begin -->
				<div class="warning-control">
					<div class="send-mode">
						<div>发布方式:</div><div>手机</div><div>手机</div>
					</div>
					<div class="warning-table">
						<table>
							<thead><tr class="table-head-height table-head-blue">
									<th>选择</th><th colspan="9">航班信息</th><th colspan="6">航段信息</th>
									<th colspan="2">人员信息</th><th class="table-head-green">发布</th>
								   </tr>
								   <tr class="table-head-height table-head-gray">
								   	<th width=""><input type="checkbox" name="all" value="all"></th><th width="">航班号</th><th width="">航班日期</th><th width="">机型</th><th width="">飞机号</th>
								   	<th width="">航段</th><th width="">起飞机场</th><th width="">起飞时间</th><th width="">降落机场</th><th width="">降落时间</th>
								   	<th width="">事件代码</th><th width="">事件名称</th><th width="">事件类型</th><th width="">软警告超限标准</th><th width="">硬警告超限标准</th>
								   	<th width="">飞行阶段</th><th width="">责任机长</th><th width="">操作员</th><th width="" class="table-head-green">状态</th>
								   </tr>
							</thead>
							<tbody>
								<tr>
								<td><input type="checkbox" name="alertId" value="1"></td><td class="flight-no">HU7341</td><td>2016/11/11</td><td>B737-800</td><td>B2647</td><td>100</td><td>CAN</td><td>2016-07-01 04:05:00</td>
								<td>HNA</td><td>2016-07-01 04:05:00</td><td class="event-code">704</td><td>50英尺至接地距离长</td><td>硬警告</td><td>&gt;=700</td><td>&gt;=900</td><td>7</td><td>周小天</td><td>李明</td><td>已发布</td>
								</tr>
								<tr>
								<td><input type="checkbox" name="alertId" value="1"></td><td class="flight-no">HU7341</td><td>2016/11/11</td><td>B737-800</td><td>B2647</td><td>100</td><td>CAN</td><td>2016-07-01 04:05:00</td>
								<td>HNA</td><td>2016-07-01 04:05:00</td><td class="event-code">704</td><td>50英尺至接地距离长</td><td>硬警告</td><td>&gt;=700</td><td>&gt;=900</td><td>7</td><td>周小天</td><td>李明</td><td>已发布</td>
								</tr>
								<tr>
								<td><input type="checkbox" name="alertId" value="1"></td><td class="flight-no">HU7341</td><td>2016/11/11</td><td>B737-800</td><td>B2647</td><td>100</td><td>CAN</td><td>2016-07-01 04:05:00</td>
								<td>HNA</td><td>2016-07-01 04:05:00</td><td class="event-code">704</td><td>50英尺至接地距离长</td><td>硬警告</td><td>&gt;=700</td><td>&gt;=900</td><td>7</td><td>周小天</td><td>李明</td><td>已发布</td>
								</tr>
								<tr>
								<td><input type="checkbox" name="alertId" value="1"></td><td class="flight-no">HU7341</td><td>2016/11/11</td><td>B737-800</td><td>B2647</td><td>100</td><td>CAN</td><td>2016-07-01 04:05:00</td>
								<td>HNA</td><td>2016-07-01 04:05:00</td><td class="event-code">704</td><td>50英尺至接地距离长</td><td>硬警告</td><td>&gt;=700</td><td>&gt;=900</td><td>7</td><td>周小天</td><td>李明</td><td>已发布</td>
								</tr>
								<tr>
								<td><input type="checkbox" name="alertId" value="1"></td><td class="flight-no">HU7341</td><td>2016/11/11</td><td>B737-800</td><td>B2647</td><td>100</td><td>CAN</td><td>2016-07-01 04:05:00</td>
								<td>HNA</td><td>2016-07-01 04:05:00</td><td class="event-code">704</td><td>50英尺至接地距离长</td><td>硬警告</td><td>&gt;=700</td><td>&gt;=900</td><td>7</td><td>周小天</td><td>李明</td><td>已发布</td>
								</tr>
								<tr>
								<td><input type="checkbox" name="alertId" value="1"></td><td class="flight-no">HU7341</td><td>2016/11/11</td><td>B737-800</td><td>B2647</td><td>100</td><td>CAN</td><td>2016-07-01 04:05:00</td>
								<td>HNA</td><td>2016-07-01 04:05:00</td><td class="event-code">704</td><td>50英尺至接地距离长</td><td>硬警告</td><td>&gt;=700</td><td>&gt;=900</td><td>7</td><td>周小天</td><td>李明</td><td>已发布</td>
								</tr>
								<tr>
								<td><input type="checkbox" name="alertId" value="1"></td><td class="flight-no">HU7341</td><td>2016/11/11</td><td>B737-800</td><td>B2647</td><td>100</td><td>CAN</td><td>2016-07-01 04:05:00</td>
								<td>HNA</td><td>2016-07-01 04:05:00</td><td class="event-code">704</td><td>50英尺至接地距离长</td><td>硬警告</td><td>&gt;=700</td><td>&gt;=900</td><td>7</td><td>周小天</td><td>李明</td><td>已发布</td>
								</tr>
								<tr>
								<td><input type="checkbox" name="alertId" value="1"></td><td class="flight-no">HU7341</td><td>2016/11/11</td><td>B737-800</td><td>B2647</td><td>100</td><td>CAN</td><td>2016-07-01 04:05:00</td>
								<td>HNA</td><td>2016-07-01 04:05:00</td><td class="event-code">704</td><td>50英尺至接地距离长</td><td>硬警告</td><td>&gt;=700</td><td>&gt;=900</td><td>7</td><td>周小天</td><td>李明</td><td>已发布</td>
								</tr>
								<tr>
								<td><input type="checkbox" name="alertId" value="1"></td><td class="flight-no">HU7341</td><td>2016/11/11</td><td>B737-800</td><td>B2647</td><td>100</td><td>CAN</td><td>2016-07-01 04:05:00</td>
								<td>HNA</td><td>2016-07-01 04:05:00</td><td class="event-code">704</td><td>50英尺至接地距离长</td><td>硬警告</td><td>&gt;=700</td><td>&gt;=900</td><td>7</td><td>周小天</td><td>李明</td><td>已发布</td>
								</tr>
								<tr>
								<td><input type="checkbox" name="alertId" value="1"></td><td class="flight-no">HU7341</td><td>2016/11/11</td><td>B737-800</td><td>B2647</td><td>100</td><td>CAN</td><td>2016-07-01 04:05:00</td>
								<td>HNA</td><td>2016-07-01 04:05:00</td><td class="event-code">704</td><td>50英尺至接地距离长</td><td>硬警告</td><td>&gt;=700</td><td>&gt;=900</td><td>7</td><td>周小天</td><td>李明</td><td>已发布</td>
								</tr>
								<tr>
								<td><input type="checkbox" name="alertId" value="1"></td><td class="flight-no">HU7341</td><td>2016/11/11</td><td>B737-800</td><td>B2647</td><td>100</td><td>CAN</td><td>2016-07-01 04:05:00</td>
								<td>HNA</td><td>2016-07-01 04:05:00</td><td class="event-code">704</td><td>50英尺至接地距离长</td><td>硬警告</td><td>&gt;=700</td><td>&gt;=900</td><td>7</td><td>周小天</td><td>李明</td><td>已发布</td>
								</tr>
							</tbody>
							<tfoot>
								<tr><td colspan="19"><div class="fenye"></div></td></tr>
							</tfoot>
						</table>
					</div>
				</div>
			<!-- 警告事件表格 end -->
		</div>
		<!-- 警告事件页面页脚 begin -->
		<div class="warning-foot">
			<div class="foot-copyright clearfix">
				<span class="copyright">
					版权所有©海航航空集团有限公司
				</span>
				<span class="chart-today">
					报表生成日期: <b id="dateToday" class="date-today"></b>
				</span>
			<div class= hr></div>
			</div>		
		</div>
		<!-- 警告事件页面页脚 end -->
	</div>
	<!-- 警告事件明细查询 end -->
	<!-- 蒙版 -->
	<div class="mask"></div>
</body>

<!-- <script src="page/qarreport/js/plugins/echarts.js" type="text/javascript"></script>
<script src="page/qarreport/js/plugins/jquery-1.10.1.min.js" type="text/javascript"></script> -->
<script src="js/core/jquery-1.7.2.min.js"></script>
<script src="js/core/jquery-ui.js"></script>
<script src="js/laypage/laypage.js" type="text/javascript"></script>
<script type="text/javascript" src="page/qarreport/js/warning/warning-601-tmp1.js"></script>
<script type="text/javascript">
	//页面底部获取系统时间
	!function(){
		var _date = new Date();
		var _day = _date.getDate();     //获取系统当前日
		var _mouth = _date.getMonth()+1; //获取系统当前月份
		var _year = _date.getFullYear();  //获取系统当前年份
		var _myDate = document.getElementById('dateToday');
		_myDate.innerHTML = _year+ '/' + _mouth + '/' +  _day;  //得到系统时间
	}();
	 
</script>
</html>