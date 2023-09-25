const gulp = require("gulp")
const webserver = require("gulp-webserver")
const { watch, parallel} = gulp

function server() {
    return gulp.src("build")
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true,
        }))
}


function watchApps(cb) {

  const filesToWatch = ['src/**/*.html', 'src/**/*.scss', 'src/**/*.js', 'src/assets/imgs/**/*.*']


  watch(filesToWatch, function () {

    return parallel('appHtml', 'appCss', 'appJs', 'appImg')()
  })

  return cb()
}

module.exports = { watchApps, server}