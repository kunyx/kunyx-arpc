'use strict';

angular.module('xrpcJsonApp')
.controller('loginCtrl',
['$scope', 'jsonrpc', '$rootScope',
  function($scope, jsonrpc, $rootScope) {
    var params = { nev: '', xun: '', xpw: ''};
    $scope.userLogin = function () {
      params.xpw = $scope.xpw;
      params.xun = $scope.xun;
      console.log('userLogin params ', params);
      jsonrpc
      .request('user_login', params)
      .then(function(result) {
        if (result.user_login[0].xun == params.xun
            && result.user_login[0].xpw == params.xpw
            && $rootScope.dbu_ != params.xun) {
          $rootScope.dbu_ = params.xun;
          $rootScope.elem1 = document.getElementById('termek_kezelo');
          toggleClass($rootScope.elem1, 'invisible', false);
          $rootScope.elem2 = document.getElementById('logout_button');
          toggleClass($rootScope.elem2, 'invisible', false);
          $rootScope.elem2 = document.getElementById('login_button');
          toggleClass($rootScope.elem2, 'invisible', true);
          setTimeout(1000);
          window.location = "http://kunyx/kunyx-arpc/index.html#/";
        }
        $scope.result = result.user_login;
        console.log('userLogin result ', result);
      })
      .catch(function(error) {
        $scope.error = error;
        console.log('userLogin error ', error);
      });
    }
  }
]);
