require(["./requirejs.config"],function(){
	require(["jquery","header","footer","cookie"],function(){
		$(function(){
			var newArr=JSON.parse($.cookie("aCar"));
			
			var str="";
				for(var i=0;i<newArr.length;i++){
					str+='<tr>'+
						
						'<td><img src='+newArr[i].img+'/></td>'+
						'<td>'+newArr[i].name+'</td>'+
						'<td class="dj">'+newArr[i].price+'</td>'+
						'<td class="_num">'+newArr[i].num+'</td>'+
						'<td><p class="je"></p></td>'+
												
					'</tr>';
					
				}
			$(".goods tbody").html(str);	
			
			function fun(){
				var sum=0;
				for(var j=0;j<newArr.length;j++){  //每个结算金额
					$(".je").eq(j).text($(".dj").eq(j).text()*$("._num").eq(j).text() )					
					sum+=$(".je").eq(j).text()*1;
					$("#sum").text(sum.toFixed(2))
				}
			};
			fun();
			
			
			
			
			
			
			
		})
		
		
		
		
		
		
		
	})
})