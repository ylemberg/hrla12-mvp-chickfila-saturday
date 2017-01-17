angular.module('chickfilApp')
  .factory('ordersFactory', function($http) {
    var getMenu = function() {
      return $http.get('/api/fetchMenu');
    };

    var getTimeLeft = function() {
      return moment("2017-01-21T12:00:00.000").countdown().toString();
    };
    
    return {
      getMenu: getMenu,
      getTimeLeft: getTimeLeft
    };
  });