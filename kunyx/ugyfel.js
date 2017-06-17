'use strict';

angular.module('xrpcJsonApp')
.controller('ugyfelCtrl', ['$scope', 'jsonrpc', '$rootScope', function($scope, jsonrpc, $rootScope) {
  var params = {kod: '1', neve: '', cid: '', esz: '', cim: '', szc: '', emsz: '',
    kpcs: '', tel: '', mail: '', hnap: '', hitelk: '', hitelm: '', dbu: ''};
  $scope.ugyfelSlt = function () {
    params.kod = 1;
    params.cid = '';
    params.neve = '';
    console.log(params);
    jsonrpc
    .request('ugyfel_slt', params)
    .then(function(result) {
      params.kod = result.ugyfel_slt[0].kod;
      params.cid = result.ugyfel_slt[0].cid;
      params.neve = result.ugyfel_slt[0].neve;
      params.szc = result.ugyfel_slt[0].szc;
      params.emsz = result.ugyfel_slt[0].emsz;
      params.kpcs = result.ugyfel_slt[0].kpcs;
      params.mail = result.ugyfel_slt[0].mail;
      params.hnap = result.ugyfel_slt[0].hnap;
      params.hitelk = result.ugyfel_slt[0].hitelk;
      params.hitelm = result.ugyfel_slt[0].hitelm;
      $scope.result = result.ugyfel_slt;
      console.log(result);
    })
    .catch(function(error) {
      $scope.error = error;
      console.log(error);
    });
  }
  $scope.ugyfelUpd = function () {
    //params.kod = '1';
    params.neve = $scope.neve;
    params.esz = $scope.esz;
    params.cim = $scope.cim;
    params.tel = $scope.tel;
    params.dbu = $rootScope.dbu_;
    console.log(params);
    jsonrpc
    .request('ugyfel_upd', params)
    .then(function(result) {
      $scope.result = result.ugyfel_upd;
      console.log(result);
    })
    .catch(function(error) {
      $scope.error = error;
      console.log(error);
    });
  }
  $scope.ugyfelSlt();
}]);
