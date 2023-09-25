const gulp = require("gulp")
const { series, parallel } = gulp

const { appHtml, appCss, appJs, appImg } = require("./gulp-tasks/app")
const { depsCss, depsFonts } = require("./gulp-tasks/deps")
const { watchApps, server } = require("./gulp-tasks/server")

module.exports.default = series(
    parallel(
        series(appHtml, appCss, appJs, appImg),
        series(depsCss, depsFonts)
    ), 
    server,
    watchApps
)