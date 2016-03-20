// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine-jquery', 'jasmine'],
    browsers: ['Chrome'],
    files: [
      'node_modules/jquery/dist/jquery.js',
      'app/lib/vendor/hogan-3.0.2.js',
      'app/modules/tabbed-component.js',
      'spec/index.spec.js',
      'spec/fixtures/index.html'
    ]
  });
};
