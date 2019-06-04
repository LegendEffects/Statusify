const fs = require('fs');
const browserify = require('browserify');
const vueify = require('vueify');
const babelify = require('babelify');
const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

const browserify_minify = require('uglifyify');

sass.compiler = require('node-sass');

gulp.task('build', function() {
    return browserify('./index.js')
    .transform(vueify)
    .transform(babelify)
    .transform(browserify_minify)
    .require('./vendor/vue/vue.js', {expose: 'vue'})
    .bundle()
    .pipe(fs.createWriteStream('../dist/main.min.js'));
})

function buildJS(cb) {
    return browserify('./index.js')
        .transform(vueify)
        .transform(babelify)
        .require('./vendor/vue/vue.js', {expose: 'vue'})
        .bundle()
        .pipe(fs.createWriteStream('../dist/main.js'));
}

buildJS.taskName = 'Build JS';

gulp.task('watch', function() {
    gulp.watch(['**/*.js', '**/*.vue', '!gulpfile.js'], buildJS);
})

exports.default = buildJS;