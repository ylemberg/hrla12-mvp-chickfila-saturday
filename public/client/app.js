angular.module('chickfilApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
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
      }).state('users', {
        url: '/users',
        templateUrl: 'client/users/usersView.html',
        controller: 'usersCtrl'
      });
});