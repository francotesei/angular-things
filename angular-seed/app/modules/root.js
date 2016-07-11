angular.module('root',[
    'ui.router'
])



.config(['$locationProvider','$stateProvider','$urlRouterProvider',
  function($locationProvider,$stateProvider,$urlRouterProvider){
  $stateProvider 
      .state("root", { 
          url: "/root", 
          templateUrl: "views/root.tlp.html",
          controller: "root.ctrl", 
          controllerAs : "root", 
          resolve: {}
        });
  
   $urlRouterProvider.otherwise("/root");
}]);
