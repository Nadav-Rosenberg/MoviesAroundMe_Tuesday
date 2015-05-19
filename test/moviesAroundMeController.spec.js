describe('MoviesAroundMeController', function() {
  beforeEach(module('MoviesAroundMe'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('MoviesAroundMeController');
  }));

  it('initialises with an empty movie list, post & distance', function() {
  	expect(ctrl.searchResult).toBeUndefined();
  	expect(ctrl.postCode).toBeUndefined();
  	expect(ctrl.distance).toBeUndefined();
  });

  describe('when searching for movies', function() {

    var items = [
      {
        "title": "Movie #1",
        "distance": "1.1"
      }, 
      {
        "title": "Movie #2",
        "distance": "2.2"
      }
    ];

    it('displays search results', function() {
      expect(ctrl.searchResult.items).toEqual(items);
    });
  });

});