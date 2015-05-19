moviesAroundMe.controller('MoviesAroundMeController', [function() {

  var self = this;

  self.doSearch = function() {
  	self.searchResult = {
	    items: [
	      {
	        "title": "Movie #1",
	        "distance": "1.1"
	      }, 
	      {
	        "title": "Movie #2",
	        "distance": "2.2"
	      }
	    ]
  	};
  };

}]);