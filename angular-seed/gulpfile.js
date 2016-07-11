/*libs*/
var gulp    =   require('gulp'),
   jshint   =   require('gulp-jshint'),
  connect   =   require('gulp-connect'),
  uglify    =   require('gulp-uglify'),
  minHtml   =   require('gulp-minify-html'),
  minCss    =   require('gulp-minify-css'),
  notify    =   require('gulp-notify'),
  jsonSrv   =   require('gulp-json-srv');

/*local vars*/
var basePath = './app';

/*functions*/
backendSrv = function(){
  jsonSrv.start({
		data: 'db.json',
		port: 3000
	});

};
serverDev = function(){
  connect.server({
    root:'app',
    livereload:true
  });
};

htmlReload = function(){
  gulp.src(basePath+'/**/*.html')
  .pipe(connect.reload());
};
cssReload = function() {
 gulp.src(basePath+'/assets/stylesheets/**/*.css')
 .pipe(connect.reload());
 };

 loadLibs = function(){
   gulp.src('./node_modules/**/**/**')
  .pipe(gulp.dest(basePath+'/assets/libs'))
};

watch = function(){
  gulp.watch([basePath+'/**/*.html',basePath+'/**/**/*.js',basePath+'/assets/stylesheets/**/*.css'],['htmlReload'],['cssReload']);

};

/*task*/
gulp.task('default',['serverDev','watch']); /*default task*/
gulp.task('watch',watch); /*console out events */
gulp.task('serverDev',serverDev); /*server develoment */
gulp.task('htmlReload',htmlReload);/* reload html files */
gulp.task('cssReload',cssReload);/* reload css files */
gulp.task('backendSrv',backendSrv);/* backend mock server https://www.npmjs.com/package/gulp-json-srv*/
gulp.task('loadLibs',loadLibs);/* load the libs */