require(["./requirejs.config"],function(){
	require(["jquery","header","footer","cookie"],function(){
		$(function(){
			
		
		var arr=JSON.parse($.cookie("cart"));
			//	console.log(arr);
			//	console.log($.cookie("cart"));
				 //splice
				 //将cookie内容渲染到tbody里面
				var str="";
				for(var i=0;i<arr.length;i++){
					str+='<tr>'+
						'<td><input type="checkbox" class="check"/></td>'+
						'<td><img src='+arr[i].img+'/></td>'+
						'<td>'+arr[i].name+'</td>'+
						'<td class="dj">'+arr[i].price+'</td>'+
						'<td><span class="_num">'+arr[i].num+'</span><input class="number" type="text"/></td>'+
						'<td><p class="je"></p></td>'+
						
						'<td>'+
							'<a href="javascrip:;" class="bj">修改</a>'+
							'<a href="javascrip:;" class="qd">确定</a>'+
							'<a href="javascrip:;" class="qx">取消</a>'+
							'<a href="javascrip:;" class="sc">删除</a>'+
						'</td>'+
					'</tr>';
					
				}
				if(str==""){
					alert("你的购物车比我的荷包还空哦！");
					str='<tr><td colspan="6">购物车空空如也~</td></tr>'
				};
				$("tbody").html(str);
				//console.log($(".dj").text());
				function bjCok(){
					for(var h=0;h<arr.length;h++){
						arr[h].num=$("tbody tr").eq(h).find("._num").text()*1;
						
					};
					$.cookie("cart",JSON.stringify(arr),{path:"/"})
					
				};
				
				fun();
				function fun(){
				for(var j=0;j<arr.length;j++){  //每个结算金额
					$(".je").eq(j).text($(".dj").eq(j).text()*$("._num").eq(j).text() )					
					}
				}
				//编辑按钮				
				$(".bj").on("click",function(){
					//console.log(this);
					let $tr=$(this).parent().parent();
					$tr.addClass("edit");
				//	console.log($tr[0]);				
					$tr.find(".number").val($tr.find("span").text());				
					
				});
				$(".qd").on("click",function(){
					let $tr=$(this).parent().parent();
					$tr.find("span").text($tr.find(".number").val());
					$tr.removeClass("edit");
					if($tr.find("span").text()==0){
						$tr.remove();
					}
					fun();
					_sum();
					bjCok();
					console.log($.cookie("cart"));
					
				});
				$(".qx").on("click",function(){
					let $tr=$(this).parent().parent();
					$tr.removeClass("edit");
				});
				$(".sc").on("click",function(){
					let $tr=$(this).parent().parent();
					let m=$tr.index();  //找到下标删除对应arr值再存cookie
					//	console.log(m);
					if(confirm("真的要抛弃我吗？")){
						$tr.remove();   //删除自己
						arr.splice(m,1);
						$.cookie("cart",JSON.stringify(arr),{path:"/"});
						//console.log(arr);
						//console.log(arr[0]);
						$("#cars span").text(arr.length);
					if(!arr[0]){
						alert("购物车没任何商品了哦！")
						let str1='<tr><td colspan="6">购物车空空如也~</td></tr>';
						$("tbody").html(str1)
							}
						
						}	
					
					_sum();
					
				});
				
				$("#allcheck").on("click",function(){
					$(".check").prop("checked",true);//注意Pro与attr（一次）的区别
					//count=target.checked? check.length:0;
					_sum();
					
				});
				$(".check").on("click",function(){
					//console.log($(".check:checked").length);//选中数量
					let $tr=$(this).parent().parent();
					$(".check").length===$(".check:checked").length?	//jQuery的length是属性
					$("#allcheck").prop("checked",true):$("#allcheck").prop("checked",false);					
					_sum();
					
				});
				$("#single").on("click",function(){
					for(let m=0;m<arr.length;m++){
						//index自动去找所选元素相对于其父级元素的位置
						//console.log($(".check:checked").parent().parent().index())
						//上面这个方法index只会返回找到的第一个值的下标
						if($(".check").eq(m).prop("checked")){
							$("tbody tr").eq(m).remove();
							arr.splice(m,1);
							$.cookie("cart",JSON.stringify(arr),{path:"/"});
							m--;//下标回退 重新去找 没这个的话只能删掉一个
						}						
					}
					$("#cars span").text(arr.length);
					_sum();
				});
				$("#all").on("click",function(){
					arr=[];
					$.cookie("cart",JSON.stringify(arr),{path:"/"});
					let str2='<tr><td colspan="6">购物车空空如也~</td></tr>';
					$("tbody").html(str2);
					$("#cars span").text(arr.length);
					_sum();
				})
				
				function _sum(){//下面总的全部结算金额
					var sum=0;
					for(let k=0;k<$("tbody tr").length;k++){
						//console.log($("tbody tr").length);						
						if($("tbody tr").eq(k).find(".check").prop("checked")){
							//console.log($("tbody tr").eq(k).find(".dj").text());
							//console.log($("tbody tr").eq(k).find("._num").text());
							sum+=$("tbody tr").eq(k).find(".dj").text()*1*($("tbody tr").eq(k).find("._num").text()*1)
							
						}
						
					}
					$("#sum").text(sum.toFixed(2));
				};
				
				
				//结算所选按钮存另一个数组 再存另一个cookie
				
				$("#oder").on("click",function(){
					//$.removeCookie("aCar",{path: "/"});
					var newArr=[];
					for(let p=0;p<$(".check").length;p++){
						if($(".check").eq(p).prop("checked")){
							newArr.push(arr[p]);							
						}						
					}					
					$.cookie("aCar",JSON.stringify(newArr),{path:"/"});
					console.log($.cookie("aCar"));
				//	location.href="/html/pay.html";
				})
				
				
				
	})			
		
	}
		
	)
})