/**
 * 数据关键字过滤
 * @author xiaomage
 */
(function(global) {

  
  /**
   * 初始化方法
   */
  function fuzzyutil(options) {
    
    for(var v in options){
   
    	if(v){
    		
    		fuzzyutil.defaultOptions[v]=options[v];
    	}
    
    }
    
    for(var v in fuzzyutil.defaultOptions){
    	fuzzyutil[v]=fuzzyutil.defaultOptions[v];
    }
    
    return fuzzyutil;

  };

  fuzzyutil.defaultOptions = {
	/**
	 * 搜索数据集
	 */	 
	list: undefined,
	/**
	 * 搜索字段
	 */
    keys:[],
    
    _searchFn: function (searchkey){
    	
    	
    	if(this.list){
    		
    		var filterarr = new Array();
    		
    		for(var i in this.list){
    			
    			var item =this.list[i];
    			/**
    			 * 是否包含相关字符
    			 */
    			if(this.keys.length>0&&this._validKeys(item, searchkey)){
    				
    				filterarr.push(item);
    				
    			}
    			
    		}
    		
    		return filterarr;

    	}
    	
    	return [];
    	
    },
    _validKeys:function (item,searchkey){
    	/**
    	 * 只有一个字段
    	 */
    	if(this.keys.length==1){
    		
    		return item[this.keys[0]].toUpperCase().indexOf(searchkey.toUpperCase())>=0;
    		
    	}else if(this.keys.length>1){
    		/**
    		 * 多字段匹配
    		 */
    		for(var i in this.keys){
    			
    			if(item[this.keys[i]].toUpperCase().indexOf(searchkey.toUpperCase())>=0){
    				
    				return true;
    			}
    			
    		}
    	}
    	
    },
    search:function (searchkey){
    	
    	return this._searchFn(searchkey);
    	
    }
    
  };

  // Export to Common JS Loader
  if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = fuzzyutil;
  } else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(function() {
      return fuzzyutil;
    });
  } else {
    // Browser globals (root is window)
    global.fuzzyutil = fuzzyutil;
  }

  
})(this);


/*
 *demo test*/
/*
 var jsonobj =[{"title":"测试参数","name":"cccs"},{"title":"xxxx北京海","name":"bjh"},{"title":"北海海口","name":"bhhk"}];
 var  fuzzyutilobj=  new fuzzyutil({"keys":["title","name"],"list":jsonobj});
 
 alert(fuzzyutilobj.search("bh"));

*/
