exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:8010/',
  specs: ['js/e2e/**/*.js'],
  framework: 'jasmine2',
  multiCapabilities: [
    {browserName: 'chrome'}
  ],

  onPrepare: function() {
      var jasmineReporters = require('jasmine-reporters');

      return browser.getProcessedConfig().then(function(config) {
          var browserName = config.capabilities.browserName;
          var junitReporter = new jasmineReporters.JUnitXmlReporter({
              savePath: 'reports/e2e/'+browserName,
              filePrefix: 'report'
          });

          jasmine.getEnv().addReporter(junitReporter);
      });
  }
}
