var app = angular.module("app", ["ngResource", "ui.router", "ui.router.state"]).run(function($rootScope) {
  $rootScope.log = function(thing) {
    return console.log(thing);
  };
  return $rootScope.alert = function(thing) {
    return alert(thing);
  };
});
