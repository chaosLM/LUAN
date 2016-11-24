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
	<!-- 对话框 -->
	<div id="dialog" title="航班信息">
		<div id="accordion1">
		  <h3>航段信息明细</h3>
		  <div>
		    <p>
		    Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer
		    ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit
		    amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut
		    odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
		    </p>
		  </div>
		 </div>
		 <div id="accordion2">
		  <h3>航班信息</h3>
		  <div>
		    <p>
		    Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet
		    purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor
		    velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In
		    suscipit faucibus urna.
		    </p>
		  </div>
		 </div>
		 <div id="accordion3">
		  <h3>机队信息</h3>
		  <div>
		    <p>
		    Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis.
		    Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac libero
		    ac tellus pellentesque semper. Sed ac felis. Sed commodo, magna quis
		    lacinia ornare, quam ante aliquam nisi, eu iaculis leo purus venenatis dui.
		    </p>
		  </div>
		  </div>
		  <div id="accordion4">
		  <h3>天气信息</h3>
		  <div>
		    <p>
		    Cras dictum. Pellentesque habitant morbi tristique senectus et netus
		    et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in
		    faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia
		    mauris vel est.
		    </p>
		    <p>
		    Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus.
		    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
		    inceptos himenaeos.
		    </p>
		  </div>
		  </div>
		  <div id="accordion5">
		  <h3>跑道信息</h3>
		  <div>
		    <p>
		    Cras dictum. Pellentesque habitant morbi tristique senectus et netus
		    et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in
		    faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia
		    mauris vel est.
		    </p>
		    <p>
		    Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus.
		    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
		    inceptos himenaeos.
		    </p>
		  </div>
		</div>
		<div class="decoding-data"><div>查看译码数据</div></div>
	</div>
</body>

<script src="js/core/jquery-1.7.2.min.js"></script>
<script src="js/core/jquery-ui.js"></script>
<script type="text/javascript" src="page/qarreport/js/warning/warning-601-tmp2.js"></script>

</html>