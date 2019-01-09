//define 定义一个模块
define(["jquery","cookie"],function(){ //需要依赖jQuery
	class Header{
		constructor(){
			this.init();
		}
		init(){
			var _this=this;
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
				//console.log($(".pro"));
				_this.enter();

			});
			
					}
		
		enter(){
			$(".pro").mouseenter(function(){
				$(".product").addClass("acproduct")
			});
			$(".product").hover(function(){
				$(".product").addClass("acproduct")
			},function(){
				$(".product").removeClass("acproduct")
			})
			$(".pro").mouseleave(function(){
				$(".product").removeClass("acproduct")
			});
			
			$(".act").mouseenter(function(){				
				$(".active").addClass("acactive")
			});
			$(".active").hover(function(){
				$(".active").addClass("acactive")
			},function(){
				$(".active").removeClass("acactive")
			});
			$(".act").mouseleave(function(){
				$(".active").removeClass("acactive")
			});
			
			$(".sto").mouseenter(function(){
				$(".story").addClass("acstory")
			});
			$(".story").hover(function(){
				$(".story").addClass("acstory")
			},function(){
				$(".story").removeClass("acstory")
			});
			$(".sto").mouseleave(function(){
				$(".story").removeClass("acstory")
			});
			$(".gar").mouseenter(function(){
				$(".garden").addClass("acgarden")
			});
			$(".garden").hover(function(){
				$(".garden").addClass("acgarden")
			},function(){
				$(".garden").removeClass("acgarden")
			})
			$(".gar").mouseleave(function(){
				$(".garden").removeClass("acgarden")
			});
		}
		
		
		
		
		
	}
	return new Header();
	
})