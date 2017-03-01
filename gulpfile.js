var gulp = require('gulp'),
    sass = require('gulp-sass')
    rename = require('gulp-rename')
    colors = require('colors')
    connect = require('gulp-connect')
    autoprefixer = require('gulp-autoprefixer');

var autoprefixerOptions = {
  browsers: ['last 2 versions', 'ie >= 11', 'Firefox ESR']
};

gulp.task('build', function() {

    gulp.src('./src/flexbox-lite.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(rename('flexbox-lite.min.css'))
    .pipe(gulp.dest('./dist'));

});

gulp.task('serve', function() {

    gulp.src('./dist/flexbox-lite.min.css')
        .pipe(gulp.dest('./examples/'));

    connect.server({
        root: 'examples',
        livereload: true
    });

});

gulp.task('start', ['build', 'serve']);

gulp.task('default', ['build', 'serve']);