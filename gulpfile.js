const gulp = require('gulp')
const pug = require('gulp-pug')

gulp.task('pug', function(){
    gulp.src(['src/pages/*.pug'], {
            base: 'src/pages'
        })
        .pipe(pug())
        .pipe(gulp.dest('./dist/'))
})

gulp.task('default', ['pug'])