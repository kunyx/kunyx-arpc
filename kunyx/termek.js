'use strict';

angular.module('xrpcJsonApp')
.controller('termekCtrl', ['$scope', 'jsonrpc', '$rootScope', function($scope, jsonrpc, $rootScope) {
  var params = {kod: '', neve: '', grp: '', txk: '', cid: '', hksz: '0', bnaar: '0', keszlet: '0',
    enear: '0', ebear: '0', nev: '', mgy: '', vtsz: '', akcio: '', mqty: '0', bzmy: '', dbu: ''};
  $scope.txk = $rootScope.txk_;
  $scope.grp = $rootScope.grp_;
  console.log('txk: ' + $rootScope.txk_);
  console.log('grp: ' + $rootScope.grp_);
  $scope.termekSlt = function () {
    params.txk = $rootScope.txk_;
    params.grp = $rootScope.grp_;
    if ($scope.kod != undefined) params.kod = $scope.kod;
    if ($scope.neve != undefined) params.neve = $scope.neve;
    console.log(params);
    jsonrpc
    .request('termek_slt', params)
    .then(function(result) {
      $scope.result = result.termek_slt;
      console.log(result);
    })
    .catch(function(error) {
      $scope.error = error;
      console.log(error);
    });
  }
  $scope.termekUpd = function () {
    params.kod = $scope.kod;
    params.neve = $scope.neve;
    params.grp = $rootScope.grp_;
    params.txk = $rootScope.txk_;
    params.ebear = $scope.ebear;
    params.nev = $scope.nev;
    params.dbu = $rootScope.dbu_;
    console.log(params);
    jsonrpc
    .request('termek_upd', params)
    .then(function(result) {
      $scope.result = result.termek_upd;
      console.log(result);
    })
    .catch(function(error) {
      $scope.error = error;
      console.log(error);
    });
  }
  $scope.termekIns = function () {
    params.kod = $scope.kod;
    params.neve = $scope.neve;
    params.grp = $rootScope.grp_;
    params.txk = $rootScope.txk_;
    params.ebear = $scope.ebear;
    params.nev = $scope.nev;
    params.dbu = $rootScope.dbu_;
    console.log(params);
    jsonrpc
    .request('termek_ins', params)
    .then(function(result) {
      $scope.result = result.termek_ins;
      console.log(result);
    })
    .catch(function(error) {
      $scope.error = error;
      console.log(error);
    });
  }
  $scope.termekDel = function () {
    params.kod = $scope.kod;
    console.log(params);
    jsonrpc
    .request('termek_del', params)
    .then(function(result) {
      $scope.result = result.termek_del;
      console.log(result);
    })
    .catch(function(error) {
      $scope.error = error;
      console.log(error);
    });
  }
  $scope.changeTxk = function () {
    $rootScope.txk_ = '';
    $scope.txk = $rootScope.txk_;
    var termek_kezelo_elem = document.getElementById('termek_kezelo');
    toggleClass(termek_kezelo_elem, 'termek_kezelo_lathatalan', false);
    window.location = "http://kunyx/_ang-rpc/index.html#/taxkey";
  }
  $scope.changeGrp = function () {
    $rootScope.grp_ = '';
    $scope.grp = $rootScope.grp_;
    var termek_kezelo_elem = document.getElementById('termek_kezelo');
    toggleClass(termek_kezelo_elem, 'termek_kezelo_lathatalan', false);
    window.location = "http://kunyx/_ang-rpc/index.html#/group";
  }
  $scope.selectPrd = function (item) {
    $scope.kod = item.kod;
    $scope.neve = item.neve;
    $scope.grp = item.grp;
    $scope.txk = item.txk;
    $scope.ebear = item.ebear;
    $scope.nev = item.nev;
    console.log('grp: ' + $rootScope.grp_);
    console.log('txk: ' + $rootScope.txk_);
  }
}]);
