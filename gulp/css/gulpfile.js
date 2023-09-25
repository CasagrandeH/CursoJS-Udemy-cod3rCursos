const gulp = require("gulp")
const sass = require("gulp-sass")(require("node-sass"))
const { series, parallel} = gulp
const concat = require("gulp-concat")
const uglify = require("gulp-uglifycss")

function transSASS() {
    return gulp.src("src/sass/index.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(uglify({ "uglyComments": true }))
        .pipe(concat("estilo.min.css"))
        .pipe(gulp.dest("build/css"))
}

function copyHTML() {
    return gulp.src("src/index.html")
        .pipe(gulp.dest("build"))
}

exports.default = parallel(transSASS, copyHTML)