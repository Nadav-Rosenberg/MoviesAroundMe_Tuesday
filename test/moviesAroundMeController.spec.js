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

    var httpBackend;
    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend
      httpBackend
        .when("GET", "http://www.moviesapi.herokuapp.com/cinemas/find/SW7")
        .respond(
          { items: items }
        );
    }));

    it('displays search results', function() {
      ctrl.postCode = 'SW7';
      ctrl.distance = '2';
      ctrl.doSearch();
      httpBackend.flush();
      expect(ctrl.searchResult.items).toEqual(items);
    });
  });

});