 /**
 * Created by akortmann on 16.12.2014.
 */

     //define a global application
 angular.module('App', []);

 //create an app router for url management and redirect
 angular.module('App').config(function($routeProvider) {
     $routeProvider.when('/frontpage', {
         templateUrl: 'partials/frontpage.html',
         controller: 'frontpage'
     });
     $routeProvider.otherwise({redirectTo: '/frontpage'});

     $routeProvider.when('/tight', {
         templateUrl: 'partials/tight.html',
         controller: 'tight'
     });
     $routeProvider.otherwise({redirectTo: '/tight'});
 });


 //frontpage controller
 angular.module('App').controller('frontpage', function($scope) {
     console.log('Hello from the Frontpage Controller');
     $scope.name = 'Andy';
 });

 //tight controller
 angular.module('App').controller('tight', function($scope) {
     console.log('Hello from the TIGHTController');
     $scope.check = 'YOOSEN';
 });
