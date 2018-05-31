var gulp =                require('gulp');
var sass =                require('gulp-sass');
var autoprefixer =        require('gulp-autoprefixer');
var cleancss =            require('gulp-clean-css');
var rename =              require('gulp-rename');
var webpackStream =       require('webpack-stream');
var webpack =             require('webpack');
var config =              require('./webpack.config.js');
var browserSync =         require('browser-sync').create();

//Js task with require js
gulp.task('js', function(){
    console.log("javascript task start !");
    return gulp.src('work/js/main.js')
        .pipe(webpackStream(config, webpack))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});


//Style task sass/prefixer/clean/mini/rename
gulp.task('style', function(){
    console.log("Styles task start !");
    return gulp.src('work/scss/main.scss')
        .pipe(sass())
        .on('error', swallowError)
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie >= 11'],
            cascade: false
        }))
        .pipe(gulp.dest('work/css')) 
        .pipe(cleancss({
            compatibility: 'ie11', 
            processImport: false 
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});


gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: "dist/",
            directory: true,
            index: "index.html"
        }
    });
    gulp.watch('work/scss/**/*.scss', ['style']);
    gulp.watch('work/js/**/*.js', ['js']);
});


function swallowError (error) 
{ 
    console.log(error.toString());
    this.emit('end');
}