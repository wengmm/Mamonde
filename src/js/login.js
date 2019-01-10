require(["./requirejs.config"],function(){
	require(["jquery","cookie","header","footer"],function(){
		$(function(){
			$("form").submit(function(){
				console.log(1)
				
				$.ajax(
					{
					type:"post",
					url:"http://localhost/api/v1/login.php",
					data:{
						username:$("#name").val(),
						password:$("#password").val()
						
					},
					success: function(res){
					console.log(res);
					if(res.res_code === 1){
						let _name=JSON.stringify(res.res_body.username) ;
						console.log(_name);
						$.cookie("username",_name,{path:"/"});
						console.log($.cookie("username"));
						alert("登录成功，马上去首页");
						
						location.href = "/index.html";
					}else{
						alert("用户名或密码错误")
					}
					},
					dataType:"json"
				}
					
					
				)
				
				return false;
				
			})
			
			
			
			
		})
		
		
		
	}
		
	)
})