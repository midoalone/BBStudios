var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');

gulp.task('default', function () {
    return gulp.src('components/**/*.html')
        .pipe(templateCache())
        .pipe(gulp.dest('public'));
});