const gulp = require("gulp")
const series = gulp.series
const parallel = gulp.parallel

const concat = require("gulp-concat")
const uglify = require("gulp-uglify")
const babel = require("gulp-babel")

function transJS(cb) {
    gulp.src("src/**/*.js")
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .on("error", err => console.log(err.name))
        .pipe(concat("codigo.min.js"))
        .pipe(gulp.dest("build/JS"))
    return cb()
}

function fim(cb) {
    console.log("Fim!!")
    return cb()
}

exports.default = parallel(transJS, fim)