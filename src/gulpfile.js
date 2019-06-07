const fs = require('fs');
const browserify = require('browserify');
const vueify = require('vueify');
const babelify = require('babelify');
const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

const browserify_minify = require('uglifyify');
const gulp_cleancss = require('gulp-clean-css');

sass.compiler = require('node-sass');

gulp.task('build', function() {
    gulp.src('styles/light.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp_cleancss())
    .pipe(rename('light.min.css'))
    .pipe(gulp.dest('../dist'));

    gulp.src('styles/dark.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp_cleancss())
    .pipe(rename('dark.min.css'))
    .pipe(gulp.dest('../dist'));

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
function buildCss(cb) {
    gulp.src('styles/light.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('light.css'))
    .pipe(gulp.dest('../dist'));

    return gulp.src('styles/dark.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('dark.css'))
    .pipe(gulp.dest('../dist'));
}

buildJS.taskName = 'Build JS';
buildCss.taskName = 'Build CSS';

gulp.task('watch', function() {
    gulp.watch(['**/*.scss'], buildCss);
    gulp.watch(['**/*.js', '**/*.vue', '!gulpfile.js'], buildJS);
})

exports.default = buildJS;