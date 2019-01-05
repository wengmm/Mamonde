//引入模块 （引入插件模块）
var gulp = require("gulp");
//var miniCss = require("gulp-minify-css"); //现在改为了gulp-clean-css （4.0）
var htmlmin=require("gulp-htmlmin");//插件名
var uglify=require("gulp-uglify");
var babel=require("gulp-babel");
var connect=require("gulp-connect");
var sass = require("gulp-sass");
var cleanCss=require("gulp-clean-css");//cnpm install gulp-clean-css --save-dev

//制定任务//最后一行 一口气全部执行打包 就不用一个个html css js分别打包 在命令框输入gulp 回车就可以了

gulp.task('css', function(){
    gulp.src('src/scss/**/*.scss')//pipe出所有文件
    .pipe(sass())			//编译sass 转成css
    .pipe(cleanCss())		//转成css再压缩
    .pipe(gulp.dest('dist/css')) //放进dist
    .pipe(connect.reload());
})

gulp.task("html",function(){
	gulp.src("src/**/*.html")//找到src目录里的所有HTML
		.pipe(htmlmin({
			 removeComments: true,//清除HTML注释
               collapseWhitespace: true,//压缩HTML
               collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
               removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
              
		}))
		.pipe(gulp.dest("dist"))
		.pipe(connect.reload());
})

gulp.task("js",function(){
	gulp.src("src/js/**/*.js")
		.pipe(babel({ //加上这段代码意思为将es6转为es5
        presets: ['@babel/env']
   		 }))
		.pipe(uglify())
		.pipe(gulp.dest("dist/js"))
		.pipe(connect.reload());
})
gulp.task("server",function(){//开启服务器
	
	connect.server({//配置信息
		livereload:true,//自动刷新（代码更改之后服务器可以自动刷新）
		root:"dist",//配置根目录 让服务器在dist开启
		port:1994 //端口号 随意命名 最好不要用80（服务器运行在本机什么端口）				
	})
	
})
//移动libs
gulp.task("libs",function(){
	gulp.src("src/libs/**/*")
		.pipe(gulp.dest("dist/libs"));
	
})
//通过watch监听事件改变 自动执行任务（代码修改 dist代码也跟着改）
//监听HTML css js 改变就执行后面任务改变 但这个时候也是要手动刷新，所以我们可以在每一个任务后面加pipe(connect.reload())
gulp.task("watch",function(){  
	gulp.watch("src/**/*.html",["html"]);//因为可能到时候有多个HTML所有要用数组
	gulp.watch("src/scss/**/*.scss",["css"]);
	gulp.watch("src/js/**/*.js",["js"])
	
})

gulp.task("img",function(){
	gulp.src("src/img/**/*")//图片类型不同样不加后缀
		.pipe(gulp.dest("dist/img"))
		.pipe(connect.reload());
})
gulp.task("default",["html","css","js","server","watch","img","libs"]);
