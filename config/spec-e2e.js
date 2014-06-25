exports.config = {
  //You may need to update the selenium version
  //after running node_modules/protractor/bin/webdriver-manager update
  seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.42.2.jar',
  seleniumArgs: [],
  specs: [
    '../spec-e2e/**/*spec.{js,coffee}'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  baseUrl: 'http://localhost:8000',
  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true
  }
};
