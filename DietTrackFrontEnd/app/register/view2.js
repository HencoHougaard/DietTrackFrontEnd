'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'register/register.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);