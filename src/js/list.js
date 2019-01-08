require(["./requirejs.config"],function(){
	require(["jquery","item","url","header","footer"],function($,item,url){
		item.init(url.baseUrlRap+"/alllist");
		//console.log(url);
	}
		
	)
})