angular.module('chickfilApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        // templateUrl: 'client/orders/ordersView.html',
        views: {
          "nav": {
              templateUrl: 'client/orders/navView.html'
            },
          "order": {
            templateUrl: 'client/orders/ordersView.html',
          }
        },
        url: '/',
        controller: 'ordersCtrl'
      });
});