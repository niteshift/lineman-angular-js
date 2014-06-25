angular.module("app", [
  "ngResource"
  "ui.router"
  "ui.router.state"
]).run ($rootScope) ->

  # adds some basic utilities to the $rootScope for debugging purposes
  $rootScope.log = (thing) ->
    console.log thing

  $rootScope.alert = (thing) ->
    alert thing
