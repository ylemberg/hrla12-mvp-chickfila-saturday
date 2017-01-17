angular.module('chickfilApp')
  .controller('ordersCtrl', function($scope, $http, ordersFactory) {
    $scope.total = 0;
    $scope.menu = [];
    $scope.entrees = [];
    $scope.sodas = [];
    $scope.milkshakes = [];
    $scope.sauces = [];

    ordersFactory.getMenu().then(function(res) {
      $scope.menu = res.data;
      $scope.menu.forEach(function(item) {
        if(item.entree) {
          $scope.entrees.push(item);
        } else if(item.schemaName.indexOf('drink') !== -1) {
          $scope.sodas.push(item);
        } else if(item.schemaName.indexOf('shake') != -1) {
          $scope.milkshakes.push(item);
        }
      });

    }, function(err) {
      console.log('err', err);
    });

    $scope.submitOrder = function() {
      $http.post('/api/users', {user: $scope.user}).then(function(res) {
      }, function(err) {
        console.log('err', err);
      })
      console.log('submitOrder');
    };
});