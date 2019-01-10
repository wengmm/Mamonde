require(["./requirejs.config"],function(){
	//引入index需要依赖的模块
	require(["jquery","item","url","header","footer"],function($,item,url){
		$(function(){
			item.init(url.baseUrlRap+"/listday");			
			let $ul = $("#banner ul");
			/*console.log($ul)*/
			let $imgs = $ul.children();
			let index = 0;
			let timer = null;
			let len = $imgs.length;
			let liWidth = $imgs.eq(0).width();
			//console.log(liWidth);
			let btns = [];
		
			//拼接按钮
			for (var i = 1; i <= len; i++) {
				btns.push($("<li>").addClass(i===1?"ac":"").appendTo($("#banner ol")));
			}
			//console.log(btns);
			//在结尾追加一个img，计算ul宽度
			$ul.append($imgs.eq(0).clone());
			$ul.width((len+1)*liWidth);			
			
			//let autoplay=function(){
			$.each(btns, (i, $btn) => {
				$btn.on("click", function(){
					//去掉当前按钮及图片ac  点击按钮后加上当前ac
					btns[index].removeClass("ac");
					$imgs.eq(index).removeClass("ac");
					$(this).addClass("ac");
					index = $(this).index();
					$imgs.eq(index).addClass("ac");
					//ul移动到当前位置
					// -index*liWidth
					$ul.stop().animate({left : -index*liWidth},"slow");
				})
			})
			
			$("#next").on("click", function(){
					btns[index].removeClass("ac");
					$imgs.eq(index).removeClass("ac");
					if(++index >= len){
						//移动到追加得那一张，但是移动完成之后瞬间回到第0张
						$ul.stop().animate({left: -len*liWidth},  function(){
							$ul.css({left: 0});
						})
						index = 0;
					}else{
						$ul.stop().animate({left: -index*liWidth});
					}
			
					btns[index].addClass("ac");
					$imgs.eq(index).addClass("ac");
				});
			
				
				$("#banner").hover(function(){
					clearInterval(timer);
				}, (function autoPlay(){
					timer = setInterval(() => {						
						$("#next").trigger("click");
					},3000);
					return autoPlay;
					
				})());
				
				$("#Next").on("click",function(){
					//根据ul的length判断极值
					/*parseInt($("#list-item ul").css("left"))===300?
					$("#list-item ul").css("left","-300px");*/
					$("#list-item ul").css("left","-300px");
					
				});
				
				$("#Prv").on("click",function(){
					/*parseInt($("#list-item ul").css("left"))==0?
					$("#list-item ul").css("left","0"):*/
					$("#list-item ul").css("left","0");
					
					
				})
			




			
			
		})
		
		
	})
})

