exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['login.spec.js', 'home.spec.js'],
  capabilites: {
    browserName: 'chrome',
  },
};
