angular.module('chickfilApp')
  .controller('usersCtrl', function($scope, $http) {
    $scope.users = [];
    $scope.displayOrder = false;

    $http.get('/api/users').then(function(res) {
      $scope.users = $scope.formatData(res.data);
    }, function(err) {
      console.log('err', err);
    });

    $scope.formatData = function(users) {
      var newUsers = users.map(function(user) {
        delete user.order.__v;
        delete user.order._id;
        user.name = user.user;
        user.total = user.order.total;
        delete user.order.total;
        return user;
      }).sort(function(userA, userB) {
        return userA.name > userB.name;
      });
      return newUsers;
    };

    $scope.displayDetails = function(order) {
      $scope.currOrder = [];
      for(var key in order) {
        $scope.currOrder.push(key + ' : ' + order[key]);
      }
      $scope.displayOrder = true;
    };

    $scope.showUsers = function() {
      $scope.displayOrder = false;
    }
  });