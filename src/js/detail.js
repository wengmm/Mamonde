require(["./requirejs.config"],function(){
	require(["jquery","url","header","footer"],function($,url){
		//item.init(url.baseUrlRap+"/alllist");
		//console.log(url);
		$(function(){
			//分解地址栏 获取id
			let arrSearch = location.search.slice(1).split("=");
		    let searchObj = {};
		   	searchObj[arrSearch[0]] = arrSearch[1];
			$.ajax(
				{
					url:url.baseUrlRap+"/detail",
					type:"get",
					data:searchObj,
					dataType:"json",
			        success: function(res){
			          console.log(res);
			          $(".main-header h3,#product-name").text(res.res_body.title);
			          console.log($(".center-left .first"));
			          $(".center-left .first").attr({src:res.res_body.img});
			          $(".center-left .second").attr("src",res.res_body.imglist);
			          $("#bigimg").attr("src",res.res_body.img);
			          $("#bigimg2").attr("src",res.res_body.imglist);
			          $("#product-price span").text(res.res_body.price);
			          $(".one").html(res.res_body.kindone);
			          $(".two").html(res.res_body.kindtwo);
			          $(".three").html(res.res_body.kindthree);
			          $(".center-left .second").on("click",function(){
			          					$("#bigimg").css("z-index",0)			          	
			         							 })
			          $(".center-left .first").on("click",function(){			          	
			          					$("#bigimg").css("z-index",1)			          	
			         							 })
			        }
			        
			        }
				)						
		})
		
	}
		
	)
})