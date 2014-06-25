angular.module("app").config ($stateProvider, $urlRouterProvider) ->

  $stateProvider.state "login",
    url: "/login"
    templateUrl: "login.html"
    controller: "LoginController"

  $stateProvider.state "home",
    url: "/home"
    templateUrl: "home.html"
    controller: "HomeController"

  $stateProvider.state "list-of-books",
    url: "/list-of-books"
    templateUrl: "books.html"
    controller: "BooksController"

  $urlRouterProvider.otherwise "/login"
