moviesAroundMe.controller('MoviesAroundMeController', ['$resource', function($resource) {

  var self = this;

  var searchResource = $resource('http://moviesapi.herokuapp.com/cinemas/find/SW7')

  self.doSearch = function() {
  	searchResource.get().success(function() {	
  	}).then(function(response) {
  		self.searchResult = response.data;
  	});
  };

}]);