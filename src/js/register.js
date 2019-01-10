require(["./requirejs.config"],function(){
	require(["jquery","header","footer"],function(){
		$(function(){
			var reg=/\w/,
				reg1=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
				reg2=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/;
			
			$(".reload").on("click",function(){
				let str="0123456789abcdefg"			
				let str1 = "";
				//随机四位验证码
				for(let i = 0; i < 5; i++){
					//生成随机下标
					var rand = Math.floor(Math.random() * str.length);
					str1 += str.charAt(rand);
				}
				$("#number").text(str1);
			})
			
			$("#sub").on("click",function(e){
				var e=e||window.event;
				e.preventDefault();	
				var flag=true;  //立个flag防止信息错误也会自动提交到数据库
				if(!reg.test($("#name").val())){
					alert("用户名不能包含特殊字符");
					flag=false
				}if(!reg1.test($("#email").val())){
					alert("请输入正确邮箱号");
					flag=false
					
				}if(!reg2.test($("#password").val())){
					alert("密码由字母数字组成,至少八位")
					flag=false
				}if($("#password").val()!=$("#_password").val()){
					alert("两次密码要一致");
					flag=false
					
				}if($("#test").val()!=$("#number").html()){
					alert("验证码错误");
					flag=false
				}if(!$("#check").prop("checked")){
					alert("请先阅读梦妆条款");
					flag=false
				}
				if(flag){
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
					}else{
						alert("该用户名已被注册请重新注册")
					}
					},
					dataType:"json"
				})
				}else{
					alert("请重新输入")
				}
				
			})
			
		})
		
	}
		
	)
})
