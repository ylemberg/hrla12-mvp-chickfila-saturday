angular.module('chickfilApp')
  .controller('ordersCtrl', function($scope, $http, ordersFactory) {
    $scope.total = 0;
    $scope.menu = [];
    $scope.entrees = [];
    $scope.sodas = [];
    $scope.milkshakes = [];
    $scope.sauces = [];
    $scope.userOrder = [];
    $scope.countdown = ordersFactory.getTimeLeft();
    setInterval(function() {
      $scope.countdown = ordersFactory.getTimeLeft();
      $scope.$digest();
    }, 1000);

    ordersFactory.getMenu().then(function(res) {
      $scope.menu = res.data;
      $scope.menu.forEach(function(item) {
        if(item.entree) {
          $scope.entrees.push(item);
          item.prices = [{cost: item.price, user: item}];
        } else if(item.schemaName.indexOf('drink') !== -1) {
          $scope.sodas.push(item);
          item.prices = [{cost: item.small, user: item},
                          {cost: item.medium, user: item},
                          {cost: item.large, user: item}];
        } else if(item.schemaName.indexOf('shake') != -1) {
          $scope.milkshakes.push(item);
          item.prices = [{cost: item.small, user: item}, {cost: item.large, user: item}];
        } else if(item.schemaName.indexOf('sauce') != -1) {
          $scope.sauces.push([{numOfSauces: 1, user: item}, {numOfSauces: 2, user: item}, {numOfSauces: 3, user: item}, 
                              {numOfSauces: 4, user: item}, {numOfSauces: 5, user: item}]);
        }
      });

    }, function(err) {
      console.log('err', err);
    });

    $scope.addToTotal = function(drinkPrice) {
      $scope.total = parseFloat(($scope.total + drinkPrice.cost).toPrecision(3));
      $scope.userOrder.push(drinkPrice);
    }

    $scope.submitOrder = function() {
      var user = {user: $scope.user, userOrder: $scope.userOrder}
      $http.post('/api/users', {user: $scope.user}).then(function(res) {
        console.log('Post to /api/users successful');
      }, function(err) {
        console.log('err', err);
      });
    };
});