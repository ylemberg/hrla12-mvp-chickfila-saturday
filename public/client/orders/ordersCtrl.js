angular.module('chickfilApp')
  .controller('ordersCtrl', function($scope) {
  $scope.submitOrder = function() {
    console.log('submitOrder');
  };
});