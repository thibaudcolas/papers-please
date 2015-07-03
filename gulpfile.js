'use strict';

var path = require('path');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var bufferify = require('vinyl-buffer');
var gutil = require('gulp-util');
var browserify = require('browserify');
var browserifyInc = require('browserify-incremental');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var plz = require('gulp-pleeease');
var bs = require('browser-sync').create('main');
var reload = bs.reload;

var production = (process.env.NODE_ENV === 'production');

var rootPath = path.join('./');
var sourcePath = path.join(rootPath, 'src');

var config = {
    paths: {
        root: rootPath,
        client: path.join(sourcePath, 'client'),
        sass: path.join(sourcePath, 'sass'),
        views: path.join(sourcePath, 'templates'),
        assets: path.join(sourcePath, 'public')
    }
};

var browserifyInstance = prod ? browserify : browserifyInc;

var bundler = browserifyInstance({
    cache: {},
    transform: [babelify],
    packageCache: {},
    debug: !prod,
    fullPaths: !prod
});

bundler.add(path.resolve(config.paths.client, 'site.js'));

gulp.task('js', function() {
    return bundler.bundle()
        .on('error', function handleError(err) {
            gutil.log(err.message);
            bs.notify(err.message, 10000);
            this.emit('end');
        })
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(prod ? uglify() : gutil.noop())
        .pipe(gulp.dest(config.paths.assets))
        .pipe(bs.stream());
});

gulp.task('css', function() {
    return gulp.src(path.join(config.paths.sass, '**', '*.scss'))
        .pipe(sass({
            errLogToConsole: false,
            sourceComments: false,
            onError: function(err) {
                var message = err.file + ' (' + err.line + ':' + err.column + '): ' + err.message
                gutil.log(message);
                bs.notify(message, 10000);
            }
        }))
        .pipe(plz(config.PlzOptions))
        .pipe(gulp.dest(config.paths.assets))
        .pipe(bs.stream());
});

gulp.task('watch', ['js', 'css'], function() {
    bs.init({
        notify: true,
        open: true,
        proxy: 'localhost:5000'
    });

    var justReload = [
        path.join(config.paths.views, '**', '*.html')
    ];

    gulp.watch(justReload, bs.reload);
    gulp.watch(path.join(config.paths.sass, '**', '*.scss'), ['css']);
    gulp.watch(path.join(config.paths.client, '**', '*.js'), ['js']);
});

gulp.task('build', ['js', 'css'], function(done) {
    done();
});

gulp.task('default', ['build']);
