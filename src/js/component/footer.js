define(["jquery"],function(){
	class Footer{
		constructor(){
			this.init();
		}
		init(){
			$("footer").load("/html/component/footer.html",function(){
				
			})
		}
		
	}
	return new Footer;
	
})