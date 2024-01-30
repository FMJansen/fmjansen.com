// Include gulp
import gulp from 'gulp';

// Include plugins
import log from 'fancy-log';
import colors from 'ansi-colors';

import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';

import plumber from 'gulp-plumber';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import sourcemaps from 'gulp-sourcemaps';
import prefix from 'gulp-autoprefixer';

var imagemin = import('gulp-imagemin');
import cache from 'gulp-cache';

import clone from 'gulp-clone';
var sink = clone.sink();
// import webp from 'gulp-webp';

// Include browsersync
import browserSyncImport from 'browser-sync'
var browserSync = browserSyncImport.create();

import child from 'child_process'



// Paths
var src = 'src/';
var dest = 'static/';



// Concatenate & minify JS
gulp.task('scripts', function() {
    return gulp.src(src + 'js/*.js')
        .pipe(plumber(function(error) {
            log(colors.red(error.message));
            this.emit('end');
        }))
        .pipe(concat('2023.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dest + 'js'));
});

// Concatenate & sourcemap JS
gulp.task('scriptsDev', function() {
    return gulp.src(src + 'js/*.js')
        .pipe(plumber(function(error) {
            log(colors.red(error.message));
            this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(concat('2023.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dest + 'js'));
});



// Process & compress SCSS
gulp.task('sass', function() {
    return gulp.src(src + 'scss/2023.scss')
        .pipe(plumber(function(error) {
            log(colors.red(error.message));
            this.emit('end');
        }))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(prefix())
        .pipe(rename('2023.css'))
        .pipe(gulp.dest(dest + 'css'));
});

// Process & sourcemap SCSS
gulp.task('sassDev', function() {
    return gulp.src(src + 'scss/2023.scss')
        .pipe(plumber(function(error) {
            log(colors.red(error.message));
            this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(rename('2023.css'))
        .pipe(gulp.dest(dest + 'css'))
        .pipe(browserSync.stream());
});

// Copy SCSS
gulp.task('copy-scss', function() {
    return gulp.src(src + 'scss/*.scss')
        .pipe(gulp.dest(dest + 'css'));
});

// Copy fonts
gulp.task('copy-fonts', function() {
    return gulp.src(src + 'fonts/*')
        .pipe(gulp.dest(dest + 'fonts'));
});



// Copy & Webp images
gulp.task('images', function() {
    return gulp.src(src + 'og/*')
        .pipe(sink)
        .pipe(sink.tap())
        .pipe(gulp.dest(dest + 'og'));
});



gulp.task('jekyll', function() {
  const jekyll = child.spawn('bundle', ['exec', 'jekyll', 'build']);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => log(('Jekyll: ' + message)));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);

  return Promise.resolve('done jekyll');
});



// Static Server + watching scss/html/js files
gulp.task('serve', function() {

    browserSync.init({
        files: ['_site/**'],
        port: 3000,
        proxy: '127.0.0.1:4000'
    });

    gulp.watch("src/scss/*.scss", gulp.series('sassDev'));
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("*.md").on('change', browserSync.reload);
    gulp.watch("src/js/*.js", gulp.series('scriptsDev'));
});



// Default task: serve with browserSync
gulp.task('default',
    gulp.series(
        'serve',
        gulp.parallel('sassDev', 'scriptsDev', 'copy-scss', 'images')
    )
);



// Build task: everything minified only
gulp.task('build', gulp.parallel('scripts', 'sass', 'copy-fonts', 'images'));



// Build task: everything minified only
gulp.task('jek-build',
    gulp.series(
        'build',
        'jekyll'
    )
);



// Clear image cache
gulp.task('clear', function() {
    // Still pass the files to clear cache for
    gulp.src('images/**')
        .pipe(cache.clear());
    return Promise.resolve('done clearing');
});
