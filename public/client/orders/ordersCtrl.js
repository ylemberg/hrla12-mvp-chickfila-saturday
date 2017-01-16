angular.module('chickfilApp')
  .controller('ordersCtrl', function($scope, $http) {
  $scope.submitOrder = function() {
    $http.post('/api/users', {user: $scope.user}).then(function(res) {

    }, function(err) {
      console.log('err', err);
    })
    console.log('submitOrder');
  };
});