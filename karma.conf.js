// Karma configuration
module.exports = function(config) {
  config.set({
    systemjs: {
      configFile: 'src/systemjs.config.js',
      // list of files to serve (will not automatically be loaded)
      serveFiles: [
        'src/**/*',
        'node_modules/**/*'
      ],
      // list of files to insert <script> tag for
      includeFiles: [
        'node_modules/es6-shim/es6-shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.src.js'
      ],
      config: {
        transpiler: null,
        paths: {
          // Not really sure why this is needed here
          'systemjs': '/node_modules/systemjs/dist/system.js'
        },
      }
    },
    // list of files / patterns to load in the browser
    files: [
      'src/test/unit/*.spec.js'
    ],
    basePath: '',
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-systemjs'
    ],
    frameworks: [
      'systemjs',
      'jasmine'
    ],
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
