require(["./requirejs.config"],function(){
	require(["jquery","header","footer"],function(){
		$(function(){
			var reg=/\w/,
				reg1=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
				reg2=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/;
			$("#sub").on("click",function(e){
				var e=e||window.event;
				e.preventDefault();
				if(!reg.test($("#name").val())){
					alert("用户名不能包含特殊字符");
					
				}if(!reg1.test($("#email").val())){
					alert("请输入正确邮箱号");
					
					
				}if(!reg2.test($("#password").val())){
					alert("密码由字母数字组成,至少八位")
					
				}if($("#password").val()!=$("#_password").val()){
					alert("两次密码要一致");
					
					
				}if($("#test").val()!=$("#number").html()){
					alert("验证码错误");
					
				}if(!$("#check").prop("checked")){
					alert("请先阅读梦妆条款");
					
				}
				$.ajax({
					type:"post",
					url:"http://localhost/api/v1/register.php",
					data:{
						username:$("#name").val(),
						password:$("#password").val()
						
					},
					success: function(res){
					console.log(res);
					if(res.res_code === 1){
						alert("注册成功，马上去登录");
						location.href = "/html/login.html";
					}
					},
					dataType:"json"
				});
				
				
				
			})
			
			
			
		})
		
	}
		
	)
})
