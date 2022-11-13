const {
    src,
    dest,
    watch,
    parallel,
    series
} = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const browserSync = require('browser-sync').create();


function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'src/'
        }
    })
}

function styles() {
    return src('src/scss/style.scss')
        .pipe(scss({
            outputStyle: 'compressed'
        }))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 versions'],
            grid: true
        }))
        .pipe(dest('src/css'))
        .pipe(browserSync.stream())
}

function build() {
    return src([
            'src/**/*.html',
            'src/css/style.min.css',
            'src/images/**/*',
            'src/js/main.min.js'
        ], {
            base: 'src'
        })
        .pipe(dest('dist'))
}

function cleanDist() {
    return del('dist')
}

function watching() {
    watch(['src/scss/**/*.scss'], styles);
    watch(['src/js/main.min.js']).on('change', browserSync.reload);
    watch(['src/*.html']).on('change', browserSync.reload);
}



exports.styles = styles;
exports.browsersync = browsersync;
exports.watching = watching;
exports.cleanDist = cleanDist;

exports.build = series(cleanDist, build);
exports.default = parallel(styles, browsersync, watching);









// function (){
//     return
// }