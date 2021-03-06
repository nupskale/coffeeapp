// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('coffee', ['ionic', 'ngAnimate'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('login',{
    url: '/',
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl'
  }).state('coffeeoptions',{
    url: '/coffees',
    templateUrl: 'views/coffeeoptions.html',
    controller: 'coffeeOptCtrl'
  }).state('size',{
    url: '/size',
    templateUrl: 'views/sizeprice.html',
    controller: 'SizeCtrl'
  }).state('confirm',{
    url: '/confirm',
    templateUrl: 'views/confirmorder.html',
    controller: 'OrderConfirmCtrl'
  }).state('thanks',{
    url: '/thanks',
    templateUrl: 'views/thankyou.html'
  });
  $urlRouterProvider.otherwise('/');
});
