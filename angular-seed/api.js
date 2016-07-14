angular.module("root")
.service('api',['$resource',function($resource){

this.data = $resource('http://...');

}]);
