var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

//script paths
var jsFiles = 'components/**/*.js',
    jsDest = 'public';

gulp.task('scripts', function () {
    return gulp.src(jsFiles)
        .pipe(concat('components.js'))
        .pipe(gulp.dest(jsDest))
        // .pipe(rename('components.min.js'))
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest(jsDest));
});

gulp.task('libraries', function () {
    return gulp.src([
        'core/libraries/ng-slide-down/ng-slide-down.min.js',
        'core/libraries/checklist-model/checklist-model.js',
        'core/libraries/angularjs-slider/rzslider.min.js',
        'core/libraries/angular-color-picker/tinycolor-min.js',
        'core/libraries/angular-color-picker/angularjs-color-picker.min.js'
    ])
        .pipe(uglify({mangle: false}))
        .pipe(concat('libraries.js'))
        .pipe(gulp.dest(jsDest));
});

gulp.task('templates', function () {
    return gulp.src('components/**/*.html')
        .pipe(templateCache('templates.js', {
            module: 'StudiosModule'
        }))
        .pipe(gulp.dest('public'));
});

gulp.task('build', function () {
    return gulp.src([
        'public/libraries.js',
        'core/studios.js',
        'public/templates.js',
        'public/components.js'
    ])
    .pipe(uglify({mangle: false}))
    .pipe(concat('studios.js'))
    .pipe(gulp.dest(jsDest));
});

gulp.task('default', gulp.series(function (done) {
    // gulp.series('scripts', 'templates')();
    gulp.series('scripts', 'libraries', 'templates', 'build')();
    done();
}));