// Karma configuration
module.exports = function(config) {
  config.set({
    systemjs: {
      configFile: 'system.config.js',
      serveFiles: [
        'src/**/*',
        'test/**/*',
        'node_modules/**/*'
      ],
      includeFiles: [
        'node_modules/angular2/bundles/angular2-polyfills.js'
      ],
      config: {
        transpiler: null,
        paths: {
          'systemjs': '/node_modules/systemjs/dist/system.js',
          'system-polyfills': '/node_modules/systemjs/dist/system-polyfills.js',
          'es6-module-loader': '/node_modules/es6-module-loader/dist/es6-module-loader.js'
        },
      }
    },
    // list of files / patterns to load in the browser
    files: [
      'test/unit/*.spec.js'
    ],
    basePath: '',
    frameworks: ['systemjs', 'jasmine'],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  })
}
