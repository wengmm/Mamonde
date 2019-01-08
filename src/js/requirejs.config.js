require.config({
	baseUrl:"/",
	paths:{
		"jquery":"libs/jquery/jquery-1.11.3",
		"header":"js/component/header",		
		"footer":"js/component/footer",
		"cookie" : "libs/jquery/jquery-plugins/jquery.cookie",
		"url":"js/component/url",
		"item":"js/component/item",
		"template":"libs/template-web"
	},
	//不符合AMD规范的模块，垫片
	shim: {
		"cookie" : {
			deps: ["jquery"]
		}
	}
	
})
