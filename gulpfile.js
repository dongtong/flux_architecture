var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');


gulp.task('browserify', function(){
	gulp.src('src/js/bundle.js')
	    .pipe(browserify({transform: 'reactify'})) //for jsx compile
	    .pipe(concat('bundle.js'))
	    .pipe(gulp.dest('build/js'));
});

gulp.task('copy', function(){
	gulp.src('src/index.html')
	    .pipe(gulp.dest('build'));
	    
	gulp.src('src/css/*.*')
	    .pipe(gulp.dest('build/css'))
});

gulp.task('default', ['browserify', 'copy']);

gulp.task('watch', function(){
 gulp.watch('src/**/*.*', ['default']);
});
