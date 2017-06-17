'use strict';

angular.module('xrpcJsonApp')
.controller('ugyfelCtrl', ['$scope', 'jsonrpc', function($scope, jsonrpc) {
  var params = {kod: '', neve: '', cid: '', esz: '', cim: '', szc: '', emsz: '',
    kpcs: '', tel: '', mail: '', hnap: '', hitelk: '', hitelm: '', dbu: ''};
  $scope.ugyfelSlt = function () {
    params.kod = $scope.v_kod;
    params.neve = $scope.v_neve;
    params.cid = $scope.v_cid;
    console.log(params);
    jsonrpc
    .request('ugyfel_slt', params)
    .then(function(result) {
      console.log(result);
      $scope.result = result;
    })
    .catch(function(error) {
      console.log(error);
      $scope.error = error;
    });
  }
  $scope.ugyfelUpd = function () {
    params.kod = $scope.v_kod;
    params.neve = $scope.v_neve;
    params.cid = $scope.v_cid;
    params.esz = $scope.v_esz;
    params.cim = $scope.v_cim;
    params.szc = $scope.v_szc;
    params.emsz = $scope.v_emsz;
    params.kpcs = $scope.v_kpcs;
    params.tel = $scope.v_tel;
    params.mail = $scope.v_mail;
    params.hnap = $scope.v_hnap;
    params.hitelk = $scope.v_hitelk;
    params.hitelm = $scope.v_hitelm;
    params.dbu = $scope.v_dbu;
    console.log(params);
    jsonrpc
    .request('ugyfel_upd', params)
    .then(function(result) {
      console.log(result);
      $scope.result = result;
    })
    .catch(function(error) {
      console.log(error);
      $scope.error = error;
    });
  }
  $scope.ugyfelIns = function () {
    params.kod = $scope.v_kod;
    params.neve = $scope.v_neve;
    params.cid = $scope.v_cid;
    params.esz = $scope.v_esz;
    params.cim = $scope.v_cim;
    params.szc = $scope.v_szc;
    params.emsz = $scope.v_emsz;
    params.kpcs = $scope.v_kpcs;
    params.tel = $scope.v_tel;
    params.mail = $scope.v_mail;
    params.hnap = $scope.v_hnap;
    params.hitelk = $scope.v_hitelk;
    params.hitelm = $scope.v_hitelm;
    params.dbu = $scope.v_dbu;
    console.log(params);
    jsonrpc
    .request('ugyfel_ins', params)
    .then(function(result) {
      console.log(result);
      $scope.result = result;
    })
    .catch(function(error) {
      console.log(error);
      $scope.error = error;
    });
  }
  $scope.ugyfelDel = function () {
    params.kod = $scope.v_kod;
    console.log(params);
    jsonrpc
    .request('ugyfel_del', params)
    .then(function(result) {
      console.log(result);
      $scope.result = result;
    })
    .catch(function(error) {
      console.log(error);
      $scope.error = error;
    });
  }
}]);
