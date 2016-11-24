/**
*Create by Chaos on 2016/11/17
*/
$(function(){
	init();
});

function init(){
	/*复选框全选/全取消*/
	$('input[name="all"]').bind('click',function(){
		if(this.checked){
			$('input[name="alertId"]').attr('checked',true);
		}else{
			$('input[name="alertId"]').attr('checked',false);
		}
	});
	/*点击机型显示对话框*/
	$('.flight-no').unbind('click').bind('click',function(){
		$('.mask').css('visibility','visible');
	});
	/*点击蒙版关闭对话框*/
	$('.mask').unbind('click').bind('click',function(){
		$('.mask').css('visibility','hidden');
	});
};