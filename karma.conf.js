// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine-jquery', 'jasmine'],
    browsers: ['Chrome'],
    files: [
      'node_modules/jquery/dist/jquery.js',
      'spec/index.spec.js'
    ]
  });
};
