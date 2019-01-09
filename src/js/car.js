require(["./requirejs.config"],function(){
	require(["jquery","header","footer","cookie"],function(){
		$(function(){
			
		
		var arr=JSON.parse($.cookie("cart"));
				console.log(arr);
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
							'<a href="javascrip:;" class="bj">编辑</a>'+
							'<a href="javascrip:;" class="qd">确定</a>'+
							'<a href="javascrip:;" class="qx">取消</a>'+
							'<a href="javascrip:;" class="sc">删除</a>'+
						'</td>'+
					'</tr>';
					
				}
				$("tbody").html(str);
				//console.log($(".dj").text());
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
					fun();
				});
				$(".qx").on("click",function(){
					let $tr=$(this).parent().parent();
					$tr.removeClass("edit");
				});
				$(".sc").on("click",function(){
					let $tr=$(this).parent().parent();
					if(confirm("确定删除吗")){
						$tr.remove();
					}										
				});
				$("#allcheck").on("click",function(){
					$(".check").prop("checked",true);//注意Pro与attr（一次）的区别
					//count=target.checked? check.length:0;
					
				});
				$(".check").on("click",function(){
					//console.log($(".check:checked").length);//选中数量
					let $tr=$(this).parent().parent();
					$(".check").length===$(".check:checked").length?	//jQuery的length是属性
					$("#allcheck").prop("checked",true):$("#allcheck").prop("checked",false)
					if($(".check:checked")){
						$("#sum").text($tr.find(".je").text()*1+$("#sum").text()*1)
					}
					
				});
				/*function fun(){
					var sum=0;
					
				}*/
				/*if(target.className==="bj"){
						tr.className="edit";
						var span=tools.$("span",tr);
						//console.log(span)
						for(var i=0;i<span.length;i++){
							span[i].nextElementSibling.value=span[i].innerHTML;
						}
						}else if(target.className==="qd"){
							tr.className="";
							var span=tools.$("span",tr);
							for(var i=0;i<span.length;i++){
								span[i].innerHTML=span[i].nextElementSibling.value								
							}
							fun();
						}else if(target.className==="qx"){
							tr.className="";							
						}else if(target.className==="sc"){
							if(confirm("确定删除吗")){
							tbody.removeChild(target.parentNode.parentNode);
							var acheck=tools.$(".check",tr)[0];
							if(acheck.checked){count--};
							console.log(target.parentNode.parentNode);
							//allcheck.checked=(count===check.length);
						//	arr.splice(,1)
							//tools.cookie("cart",arr[1],{expires:-1})
							
							fun();
							}
						}else if(target.id==="allcheck"){		//注意这里是id							
							for(var j=0;j<check.length;j++){
								check[j].checked=target.checked;
								
							}
							count=(target.checked? check.length:0);
							fun();
						}else if(target.className==="check"){
							target.checked? count++:count--;															
							if(count===check.length){
								allcheck.checked=true;
							}else{allcheck.checked=false;}
							
							fun();
						}
												
					}
				
				function fun(){		
					var sum=0;
					var atr=tools.$("tr",tbody);					
					for(var k=0;k<atr.length;k++){
						var span=tools.$("span",atr[k]);
						if(tools.$(".check",atr[k])[0].checked){
							 sum+=Number(span[1].innerHTML)*Number(span[2].innerHTML);
							
						}
						tools.$("#money").innerHTML=sum;
					}*/
					
				
				
	})			
		
	}
		
	)
})