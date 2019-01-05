//define 定义一个模块
define(["jquery"],function(){ //需要依赖jQuery
	class Header{
		constructor(){
			this.init();
		}
		init(){
			$("header").load("/html/component/header.html",function(){//首先加载header  load方法加载模块
				
			})
		}
	}
	return new Header();
	
})