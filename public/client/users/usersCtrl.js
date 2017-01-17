angular.module('chickfilApp')
  .controller('usersCtrl', function($scope, $http) {
    $scope.users = [];
    $scope.trClasses = ['info', 'success', 'danger', 'warning', 'active'];

    $http.get('/api/users').then(function(res) {
      console.log('res.data', res.data);
      $scope.users = $scope.formatData(res.data);
    }, function(err) {
      console.log('err', err);
    });

    $scope.formatData = function(users) {
      return users.map(function(user) {
        console.log('user', user);
        delete user[user.order.__v];
        delete user[user.order._id];
        user.name = user.user;
        user.total = user.order.total;
        delete user.order.total;
        return user;
      });
    };
  });