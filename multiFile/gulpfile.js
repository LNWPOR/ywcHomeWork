var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload;

gulp.task('serve',function(){
	browserSync.init({
		server: "./"
	});

	gulp.watch("./*.html").on('change',reload);
	gulp.watch("./css/*.css").on('change',reload);
	gulp.watch("./js/*.js").on('change',reload);
});

gulp.task('styles',function(){
	return sass('./scss/*.scss')
	.pipe(gulp.dest('./css'));
});

gulp.task('watch',function(){
	gulp.watch('./scss/*.scss',['styles']);
});

gulp.task('default',['styles','watch','serve']);