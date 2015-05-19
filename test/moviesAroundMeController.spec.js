describe('MoviesAroundMeController', function() {
  beforeEach(module('MoviesAroundMe'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('MoviesAroundMeController');
  }));

  it('initialises with an empty movie list, post & distance', function() {
  	expect(ctrl.movieList).toBeUndefined();
  	expect(ctrl.postCode).toBeUndefined();
  	expect(ctrl.distance).toBeUndefined();
  });

});