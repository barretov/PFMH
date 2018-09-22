gulp = require('gulp');
pug = require('gulp-pug');
mcss = require('gulp-mcss');
sass = require('gulp-sass');
concat = require('gulp-concat');
uglify = require('gulp-uglify');
connect = require('gulp-connect');
babel = require('gulp-babel');

gulp.task('teste', function(){
    console.log("Iniciando o build...");
});

gulp.task('styles', function(){
    return gulp.src([
                    'src/css/main.scss',
                    ])
    .pipe(sass())
    .pipe(mcss())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('build/css'))
    .pipe(connect.reload());
});

gulp.task('fonts', function(){
    return gulp.src([
                    'node_modules/bootstrap/dist/fonts/*',
                    'node_modules/bootstrap/dist/fonts/*',
                    'node_modules/font-awesome/fonts/*',
                    ])
    .pipe(gulp.dest('build/fonts'))
    .pipe(connect.reload());
});

gulp.task('images', function(){
 gulp.src([
          'src/img/*',
          ])
 .pipe(gulp.dest('build/img'))
 .pipe(connect.reload());
});

gulp.task('pug', function(){
   gulp.src('src/html/*.pug')
   .pipe(pug())
   .pipe(gulp.dest('build'))
   .pipe(connect.reload());
});

gulp.task('js', function() {
    gulp.src([
             'node_modules/jquery/dist/jquery.min.js',
             'node_modules/bootstrap/dist/js/bootstrap.js',
             'node_modules/particlesjs/dist/particles.js',
             'node_modules/jquery.nicescroll/dist/jquery.nicescroll.js',
             'node_modules/waypoints/lib/jquery.waypoints.js',
             'src/js/*.js'
             ])
    // .pipe(uglify())
    // .pipe(babel())
    .pipe(concat('script.js'))
    .pipe(gulp.dest('build/js'))
    .pipe(connect.reload());
});

gulp.task('sworker', function() {
    gulp.src([
             'service-worker.js',
             'manifest.json',
             ])
    .pipe(gulp.dest('build/'))
    .pipe(connect.reload());
});

// server
gulp.task('server', function() {
	connect.server({
     root: ['build'],
	    // https: true,
	    livereload: true,
        // port: 443,
        port: 8081,
    });
});

gulp.task('watch', function(){
    gulp.watch(['src/css/*'], ['styles']);
    gulp.watch(['src/img/*'], ['images']);
    gulp.watch(['src/*/*.pug'], ['pug']);
    gulp.watch(['src/js/*.js'], ['js']);
    gulp.watch(['/*.js'], ['sworker']);
    gulp.watch(['/*.json'], ['sworker']);
});

gulp.task('default',
          [
          'teste',
          'styles',
          'fonts',
          'images',
          'pug',
          'sworker',
          'js',
          'server',
          'watch',
          ]
          );
