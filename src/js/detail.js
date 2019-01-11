require(["./requirejs.config"],function(){
	require(["jquery","url","header","footer","cookie"],function($,url){
		//item.init(url.baseUrlRap+"/alllist");
		//console.log(url);
		$(function(){
			//分解地址栏 获取id
			let arrSearch = location.search.slice(1).split("=");
		    let searchObj = {};
		   	searchObj[arrSearch[0]] = arrSearch[1];
		 //	console.log(searchObj.id);
			$.ajax(
				{
					url:url.baseUrlRap+"/detail",
					type:"get",
					data:searchObj,
					dataType:"json",
			        success: function(res){
			          
			          $(".main-header h3,#product-name").text(res.res_body.title);
			        //  console.log($(".center-left .first"));
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
			//加购物车
			$("#addcar").on("click",function(){				
				//console.log($("#product-name").text());
			//	console.log($(".first").attr("src"));//取到的是jQuery对象，要转原生对象
				var obj={
					id:searchObj.id,
					name:$("#product-name").text(),
					price:$("#product-price span").text(),
					img:$(".first").attr("src"),
					num:1					
				};
				if($.cookie("cart")){
					var arr=JSON.parse($.cookie("cart"));
				}else{
					var arr=[];
				}
				var flag=true;
				for(var i=0;i<arr.length;i++){
					if(arr[i].id===obj.id){ 		
						arr[i].num++;
						flag=false;
					}
				}
				if(flag){
					arr.push(obj);
				}
				$.cookie("cart",JSON.stringify(arr),{path:"/"});
				$("#cars span").text(arr.length);
				console.log($.cookie("cart"))
				
				
				
			})
			
			
			
		//购物车	
			
			
			
		})
		
	}
		
	)
})