angular.module('chickfilApp')
  .controller('ordersCtrl', function($scope, $http, ordersFactory, $state) {
    $scope.total = 0;
    $scope.menu = [];
    $scope.entrees = [];
    $scope.sodas = [];
    $scope.milkshakes = [];
    $scope.sauces = [];
    $scope.userOrder = [];
    $scope.sides = [];
    $scope.countdown = ordersFactory.getTimeLeft();
    setInterval(function() {
      $scope.countdown = ordersFactory.getTimeLeft();
      $scope.$digest();
    }, 1000);

    ordersFactory.getMenu().then(function(res) {
      $scope.menu = res.data;
      $scope.menu.forEach(function(item) {
        var tempItem = {};
        for(var key in item) {
          tempItem[key] = item[key];
        }

        if(item.entree) {
          $scope.entrees.push(item);
          item.prices = [{cost: item.price, item: tempItem}];
        } else if(item.schemaName.indexOf('drink') !== -1) {
          $scope.sodas.push(item);
          item.prices = [{cost: item.small, item: tempItem},
                          {cost: item.medium, item: tempItem},
                          {cost: item.large, item: tempItem}];
        } else if(item.schemaName.indexOf('shake') != -1) {
          $scope.milkshakes.push(item);
          item.prices = [{cost: item.small, item: tempItem}, {cost: item.large, item: tempItem}];
        } else if(item.schemaName.indexOf('sauce') != -1) {
          $scope.sauces.push([{numOfSauces: 1, item: tempItem}, {numOfSauces: 2, item: tempItem}, {numOfSauces: 3, item: tempItem},
                              {numOfSauces: 4, item: tempItem}, {numOfSauces: 5, item: tempItem}]);
        } else if(item.schemaName.indexOf('side') !== -1) {
          $scope.sides.push(item);
          item.prices = [{cost: item.small, item: tempItem},
                          {cost: item.medium, item: tempItem},
                          {cost: item.large, item: tempItem}];
        }
      });

    }, function(err) {
      console.log('err', err);
    });

    $scope.addToTotal = function(item) {
      $scope.total = parseFloat(($scope.total + item.cost).toPrecision(3)); //parsing float error
      $scope.addToOrder(item);
    };

    $scope.addToOrder = function(item) {
      $scope.userOrder.push(item);
    };

    $scope.submitOrder = function() {
      var user = {username: $scope.user, userOrder: $scope.userOrder, total: $scope.total};
      $http.post('/api/users', user, {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'}).then(function(res) {
        console.log('Post to /api/users successful');
        $state.go('users');
      }, function(err) {
        console.log('err', err);
      });
    };
});