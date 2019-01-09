define(["jquery"],function(){
	class Footer{
		constructor(){
			this.init();
		}
		init(){
			$("footer").load("/html/component/footer.html",function(){
				$(".weixin").hover(function(){
					$(".erwm").show("slow")
				},function(){
					$(".erwm").hide("slow")
				})
			})
		}
		
	}
	return new Footer;
	
})