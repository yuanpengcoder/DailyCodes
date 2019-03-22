const gulp = require('gulp');
// const babel = require('gulp-babel');
// const uglify = require('gulp-uglify');
// const rename = require('gulp-rename');
// const cssnano = require('gulp-cssnano');
// const concat = require('gulp-concat');
// const browserify = require('browserify');
// const source = require('vinyl-source-stream');


// var browserSync = require('browser-sync').create();

// 静态服务器
// gulp.task('browser-sync', function() {
//     port:666,
//     browserSync.init({
//         server: {
//             baseDir: "./dist"//服务器的根目录
//         }
//     });
// });

// 代理

// gulp.task('browser-sync', function() {
//     browserSync.init({
//         proxy: "  http://192.168.1.109"
//     });
// });

gulp.task('html',()=>{
    return gulp.src('src/gulp.html')
    // .pipe(minify())
    .pipe(gulp.dest('dist'))
});
gulp.task('default', ()=> {
    console.log("22");
    console.log("2");
  
});