require(["./requirejs.config"],function(){
	require(["jquery","item","url","header","footer"],function($,item,url){
		item.init(url.baseUrlRap+"/alllist");
		//console.log(url);
		$("#tab .cz").on("click",function(){
			
				$(".caizhuang").css("display","block");
				$(".hufu").css("display","none");
				$("#tab .hf").removeClass("ac");
				$("#tab .cz").addClass("ac");
			});
			
		$("#tab .hf").on("click",function(){
			
				$(".caizhuang").css("display","none");
				$(".hufu").css("display","block");
				$("#tab .cz").removeClass("ac");
				$("#tab .hf").addClass("ac");
			});
		
		
	}
		
	)
})