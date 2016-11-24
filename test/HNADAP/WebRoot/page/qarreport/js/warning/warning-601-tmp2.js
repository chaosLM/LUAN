/**
*Create by Chaos on 2016/11/17
*/
$(function(){
	init();
});

function init(){
	
	/*折叠面板初始化*/
	$( "#accordion1" ).accordion({ collapsible: true ,animate:false});
	$( "#accordion2" ).accordion({ collapsible: true });
	$( "#accordion3" ).accordion({ collapsible: true });
	$( "#accordion4" ).accordion({ collapsible: true });
	$( "#accordion5" ).accordion({ collapsible: true });
};