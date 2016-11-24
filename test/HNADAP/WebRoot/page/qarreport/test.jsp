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
<meta charset="UTF-8">
<base href="<%=basePath%>">

<title>test page</title>
<link type="text/css" href="page/qarreport/css/test.css">

</head>

<body>
	<div id="list">
		<table>
			<tr>
				<td>选项1<input type="checkbox" name="group" value="1" />
			</tr>
			<tr>
				<td>选项2<input type="checkbox" name="group" value="2" />
			</tr>
			<tr>
				<td>选项3<input type="checkbox" name="group" value="3" />
			</tr>
		</table>
	</div>
	全选
	<input type="checkbox" id="all" />
</body>
<script src="js/core/jquery-1.7.2.min.js"></script>
<script src="page/qarreport/js/test.js"></script>
<script>  
$(document).ready(function () {  
    //全选或全不选  
    $("#all").click(function () {  
        if (this.checked) {  
            $("table :checkbox").attr("checked", true);  
        } else {  
            $("table :checkbox").attr("checked", false);  
        }  
    });  
   /*  //设置全选复选框  
    $("#list :checkbox").click(function () {  
        allchk();  
    });  
    function allchk() {  
        var chknum = $("#list :checkbox").size();//选项总个数  
        var chk = 0;  
        $("#list :checkbox").each(function () {  
            if ($(this).attr("checked")) {  
                chk++;  
            }  
        });  
        if (chknum == chk) {//全选  
            $("#all").attr("checked", true);  
        } else {//不全选  
            $("#all").attr("checked", false);  
        }  
    }  
    //显示时执行一次  
    allchk();   */
});  
</script>  
</html>
