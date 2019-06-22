'use strict';

//angular.module('xrpcJsonApp', ['ngRoute', 'angular-jsonrpc-client', 'angularPaho'])
angular.module('xrpcJsonApp', ['ngRoute', 'angular-jsonrpc-client'])
.run(function($rootScope) {
  $rootScope.txk_ = '';
  //$rootScope.grp_ = '';
  $rootScope.ptx_ = '';
  $rootScope.dbu_ = $rootScope.dbu_ != undefined ? $rootScope.dbu_ : undefined;
    console.log('$rootScope.dbu_', $rootScope.dbu_);
  if ( $rootScope.dbu_ != undefined) {
    $rootScope.elem1 = document.getElementById('termek_kezelo');
    toggleClass($rootScope.elem1, 'invisible', false);
    $rootScope.elem2 = document.getElementById('logout_button');
    toggleClass($rootScope.elem2, 'invisible', false);
    $rootScope.elem2 = document.getElementById('login_button');
    toggleClass($rootScope.elem2, 'invisible', true);
  }
})
.config(function(jsonrpcConfigProvider) {
  jsonrpcConfigProvider.set({
    url: 'http://kunyx/cgi-bin/kunyx_rpcs.cgi'
  });
})
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'loginCtrl',
      controllerAs: 'login'
    })
    .when('/taxkey', {
      templateUrl: 'views/taxkey.html',
      controller: 'taxkeyCtrl',
      controllerAs: 'taxkey'
    })
    .when('/group', {
      templateUrl: 'views/group.html',
      controller: 'groupCtrl',
      controllerAs: 'group'
    })
    .when('/termek', {
      templateUrl: 'views/termek.html',
      controller: 'termekCtrl',
      controllerAs: 'termek'
    })
    .when('/storno', {
      templateUrl: 'views/storno.html',
      controller: 'stornoCtrl',
      controllerAs: 'storno'
    })
    .when('/ugyfel', {
      templateUrl: 'views/ugyfel.html',
      controller: 'ugyfelCtrl',
      controllerAs: 'ugyfel'
    })
    .when('/backup', {
      templateUrl: 'views/backup.html',
      controller: 'backupCtrl',
      controllerAs: 'backup'
    })
    .when('/macpar', {
      templateUrl: 'views/macpar.html',
      controller: 'macparCtrl',
      controllerAs: 'macpar'
    })
    .when('/postext', {
      templateUrl: 'views/postext.html',
      controller: 'postextCtrl',
      controllerAs: 'postext'
    })
    .otherwise({
      redirectTo: '/'
    });
})
.directive('tabs', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    controller: [ "$scope", function($scope) {
      var panes = $scope.panes = [];

      $scope.select = function(pane) {
        angular.forEach(panes, function(pane) {
          pane.selected = false;
        });
        pane.selected = true;
      }

      this.addPane = function(pane) {
        if (panes.length == 0) $scope.select(pane);
        panes.push(pane);
      }
    }],
    template:
      '<div class="tabbable">' +
        '<ul class="nav nav-tabs">' +
          '<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">'+
            '<a href="" ng-click="select(pane)">{{pane.title}}</a>' +
          '</li>' +
        '</ul>' +
        '<div class="tab-content" ng-transclude></div>' +
      '</div>',
    replace: true
  };
})
.directive('pane', function() {
  return {
    require: '^tabs',
    restrict: 'E',
    transclude: true,
    scope: { title: '@' },
    link: function(scope, element, attrs, tabsCtrl) {
      tabsCtrl.addPane(scope);
    },
    template:
      '<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' +
      '</div>',
    replace: true
  };
});

/***************
.directive('userLogout', function() {
        return {
            restrict: 'E',
            templateUrl: 'index.html',
            scope: {},
            //link: function(scope) {
            controller: [ "$scope", function($scope) {
                console.log($rootScope.dbu_);
                $scope.userLogout= function () { 
                  $rootScope.dbu_ = undefined;
                  setTimeout(1000);
                  window.location = "http://kunyx/kunyx-arpc/#/login";
                  console.log('OK');
                }
            }]
        };
    })


    .when('/sysdt', {
      templateUrl: 'views/sysdt.html',
      controller: 'sysdtCtrl',
      controllerAs: 'sysdt'
    })
    .when('/orszag', {
      templateUrl: 'views/orszag.html',
      controller: 'orszagCtrl',
      controllerAs: 'orszag'
    })
    .when('/ceginfo', {
      templateUrl: 'views/ceginfo.html',
      controller: 'ceginfoCtrl',
      controllerAs: 'ceginfo'
    })
    .when('/abtipus', {
      templateUrl: 'views/abtipus.html',
      controller: 'abtipusCtrl',
      controllerAs: 'abtipus'
    })
    .when('/abadat', {
      templateUrl: 'views/abadat.html',
      controller: 'abadatCtrl',
      controllerAs: 'abadat'
    })
    .when('/user', {
      templateUrl: 'views/user.html',
      controller: 'userCtrl',
      controllerAs: 'user'
    })
****************/