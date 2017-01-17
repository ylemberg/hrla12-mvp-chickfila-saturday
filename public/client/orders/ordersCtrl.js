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
          item.prices = [item.price];
        } else if(item.schemaName.indexOf('drink') !== -1) {
          $scope.sodas.push(item);
          item.prices = [item.small, item.medium, item.large];
        } else if(item.schemaName.indexOf('shake') != -1) {
          $scope.milkshakes.push(item);
          item.prices = [item.small, item.large];
        } else if(item.schemaName.indexOf('sauce') != -1) {
          $scope.sauces.push(item);
        }
      });

    }, function(err) {
      console.log('err', err);
    });

    $scope.addToTotal = function(drinkPrice) {
      $scope.total = parseFloat(($scope.total + drinkPrice).toPrecision(3));
    }

    $scope.submitOrder = function() {
      $http.post('/api/users', {user: $scope.user}).then(function(res) {
      }, function(err) {
        console.log('err', err);
      });
    };
});