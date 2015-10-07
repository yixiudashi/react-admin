var gulp = require("gulp");
var webpack = require('gulp-webpack');
var react = require('gulp-react');
var livereload = require('gulp-livereload');


gulp.task('webpack', function() {
    gulp.watch('./src/**/*.js',function(){
        return gulp.src('./entry.js')
        .pipe(webpack( require('./webpack.config.js') ))
        .pipe(gulp.dest('./'))
        .pipe(livereload());    
    })
});

gulp.task('react', function () {
    gulp.watch('./jsx/**/*.js', function(){
        return gulp.src('./jsx/**/*.js')
            .pipe(react())
            .pipe(gulp.dest('./js/'))
            .pipe(livereload());
    })
});

gulp.task('default', ['webpack'],function(){
    livereload.listen();
});