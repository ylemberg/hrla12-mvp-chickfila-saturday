angular.module('chickfilApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'client/orders/ordersView.html',
        controller: 'ordersCtrl'
      });
});