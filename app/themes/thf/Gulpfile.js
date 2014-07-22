var gulp = require('gulp');

var sass = require('gulp-sass');
var browserSync = require('browser-sync');

var paths = {
  sass: './scss/style.scss'
};


// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
    browserSync.init(null, {
      proxy: 'thf.tco.dev'
    });
});

// Sass task, will run when any SCSS files change & BrowserSync will auto-update browsers
gulp.task('sass', function () {
    gulp.src(paths.sass)
        .pipe(sass())
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('./'));
});

// reload will run when any other files are changed
gulp.task('reload', function () {
    gulp.src('./**/*')
        .pipe(browserSync.reload({stream:true, once: true}));
});

// Default task to be run with `gulp`
gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch('./scss/**/*', ['sass'])
    gulp.watch(['./**/*', '!./scss/**/*', '!./style.css', '!./node_modules/**/*'], ['reload'])
});