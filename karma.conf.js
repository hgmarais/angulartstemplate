// Karma configuration
// Generated on Fri Jul 24 2015 10:19:10 GMT+0200 (SAST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'www/lib/angular/angular.js',
      'www/lib/angular-mocks/angular-mocks.js',
      'www/lib/angular-ui-router/angular-ui-router.js',
      'js/app/app.js',
      'js/unit/**/*.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'junit'],

    junitReporter: {
      outputDir: 'reports/unit', // results will be saved as $outputDir/$browserName.xml
      outputFile: 'report.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
      suite: ''
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers:['Chrome'],

    plugins : [
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-chrome-launcher'
    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  })
}
