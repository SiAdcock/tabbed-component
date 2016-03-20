describe('tabbed component tests', function() {
  beforeAll(function(done) {
    jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
    loadFixtures('index.html');
    APP.tabbedComponent.init(done);
  });
  it('initialises', function() {
    expect($('.tabbed-component__tab__news')).toBeInDOM();
  });
});
