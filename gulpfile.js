let gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    svgSprite = require('gulp-svg-sprite'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace');

gulp.task('sass', function(){
    return gulp.src('assets/scss/**/*.scss')
            .pipe(sass({outputStyle: 'expanded'}))
            // .pipe(rename({suffix: '.min'}))
            .pipe(autoprefixer({
                overrideBrowserslist: ['last 8 versions']
            }))
            .pipe(gulp.dest('assets/css'))
            .pipe(browserSync.reload({stream: true}))
});

gulp.task('style', function(){
    return gulp.src([
        'node_modules/normalize.css/normalize.css',
        'node_modules/owl.carousel/dist/assets/owl.carousel.css',
        'node_modules/owl.carousel/dist/assets/owl.theme.default.css',
    ])
    .pipe(concat('libs.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('assets/css'))
});

gulp.task('script', function(){
    return gulp.src([
        'node_modules/owl.carousel/dist/owl.carousel.js',
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'))
});

gulp.task('html', function(){
    return gulp.src('assets/*.html')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function(){
    return gulp.src('assets/js/*.js')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function(){
    browserSync.init({
        server: {
            baseDir: "assets/"
        }
    });
});

gulp.task('watch', function(){
    gulp.watch('assets/scss/**/*.scss', gulp.parallel('sass'))
    gulp.watch('assets/*.html', gulp.parallel('html'))
    gulp.watch('assets/js/*.js', gulp.parallel('js'))
});

gulp.task('default', gulp.parallel('sass', 'watch', 'browser-sync', 'script', 'style'))