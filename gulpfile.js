var gulp = require('gulp')

// SASS
var sass = require('gulp-sass')
gulp.task('sass', function () {
  gulp.src('./node_modules/bootstrap/scss/bootstrap.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'))
})

// E2E tests with Protractor
// Ironically, the instructions for how to get this up and running was found at
// the site for gulp-protractor plugin: https://github.com/mllrsohn/gulp-protractor
var path = require('path')
var child_process = require('child_process')
var express = require('express')
var http = require('http')
var server = http.createServer(express().use(express.static(__dirname)))

gulp.task('protractor-run', ['serve-files'], function (done) {
  var argv = process.argv.slice(3) // forward args to protractor
  child_process.spawn(getProtractorBinary('protractor'), argv, {
    stdio: 'inherit'
  }).once('close', done)
})

gulp.task('serve-files', function (done) {
  console.log('starting file server')
  server.listen(3000, done)
})

gulp.task('test-e2e', ['protractor-run'], function (done) {
  console.log('done, closing file server')
  server.close()
})

function getProtractorBinary(binaryName){
  var winExt = /^win/.test(process.platform)? '.cmd' : ''
  var pkgPath = require.resolve('protractor')
  var protractorDir = path.resolve(path.join(path.dirname(pkgPath), '..', 'bin'))
  return path.join(protractorDir, '/' + binaryName + winExt)
}
