moviesAroundMe.controller('MoviesAroundMeController', ['$resource', function($resource) {

  var self = this;

  var searchResource = $resource('http://www.moviesapi.herokuapp.com/cinemas/find/SW7')

  self.doSearch = function() {
  	self.searchResult = searchResource.get();
  };

}]);