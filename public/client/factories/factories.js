angular.module('chickfilApp')
  .factory('ordersFactory', function($http) {
    var getMenu = function() {
      return $http.get('/api/fetchMenu');
    };
    
    return {
      getMenu: getMenu
    };
  });