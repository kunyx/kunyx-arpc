'use strict';

angular.module('xrpcJsonApp')
.controller('loginCtrl', ['$scope', 'jsonrpc', '$rootScope', function($scope, jsonrpc, $rootScope) {
  var params = { nev: '', xun: '', xpw: ''};
  $scope.userLogin = function () {
    params.xpw = $scope.xpw;
    params.xun = $scope.xun;
    console.log(params);
    jsonrpc
    .request('user_login', params)
    .then(function(result) {
      if (result.user_login[0].xun == params.xun && result.user_login[0].xpw == params.xpw) {
        $rootScope.dbu_ = params.xun;
        var elem = document.getElementById('termek_kezelo');
        toggleClass(elem, 'termek_kezelo_lathatalan', false);
        window.location = "http://kunyx/_ang-rpc/index.html#/";
      }
      $scope.result = result.user_login;
      console.log(result);
    })
    .catch(function(error) {
      $scope.error = error;
      console.log(error);
    });
  }
}]);
