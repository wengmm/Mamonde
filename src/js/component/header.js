//define 定义一个模块
define(["jquery","cookie"],function(){ //需要依赖jQuery
	class Header{
		constructor(){
			this.init();
		}
		init(){
			$("header").load("/html/component/header.html",function(){//首先加载header  load方法加载模块
				//console.log($.cookie("username"));
				if($.cookie("username")){
					$("#welcome").css("display","block").children().text(JSON.parse($.cookie("username")));
					$("#exit").css("display","block");
					$("#exit").on("click",function(){
						$.removeCookie("username",{path:"/"});
						location.reload();
					})
					$("#register_login").css("display","none");
				}
			})
		}
		
	}
	return new Header();
	
})