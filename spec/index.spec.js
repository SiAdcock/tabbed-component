describe('simple tests', function() {
  it('works', function() {
    expect(1).toBe(1);
  });
  it('destroys the DOM', function() {
    expect($('#window')).not.toBeInDOM();
  });
});
