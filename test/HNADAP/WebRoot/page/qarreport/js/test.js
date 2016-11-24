$(function(){
	var param='xxxxx';
	init(a);
});

function init(call){
	console.log('init');
	var _param='123';
	if(call&&typeof(call)==='function'){
		call(_param);
	};		
};

function a(){
	console.log('xxx');
};

function b(){
	alert('b');
};