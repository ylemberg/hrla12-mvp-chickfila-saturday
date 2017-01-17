angular.module('chickfilApp')
  .controller('usersCtrl', function($scope, $http) {
    $scope.users = [];

    $http.get('/api/users').then(function(res) {
      $scope.users = $scope.formatData(res.data);
    }, function(err) {
      console.log('err', err);
    });

    $scope.formatData = function(users) {
      return users.map(function(user) {
        delete user[user.order.__v];
        delete user[user.order._id];
        user.name = user.user;
        user.total = user.order.total;
        delete user.order.total;
        return user;
      });
    };
  });