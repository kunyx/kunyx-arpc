'use strict';

angular.module('xrpcJsonApp')
.controller('termekCtrl', ['$scope', 'jsonrpc', '$rootScope',
  function($scope, jsonrpc, $rootScope) {
    var params = { kod: '', txk: '', grp: '', nev: '', neve: '',
    ebear: '0', dbu: '', cid: '',bnaar: '0', keszlet: '0',  mgy: 'C', 
    akcio: 'N', mqty: '0', vtsz: '', bzmy: 'N', publikus: 'I', lathato: 'I' };
    $scope.ddlist_afa = [];
    $scope.ddlist_grp = [];
    $scope.termekSlt = function () {
      if ($scope.lathato != undefined) params.lathato = $scope.lathato;
      if ($scope.kod != undefined) params.kod = $scope.kod;
      if ($scope.txk != undefined) params.txk = $scope.txk;
      if ($scope.grp != undefined) params.grp = $scope.grp;
      if ($scope.nev != undefined) params.nev = $scope.nev;
      if ($scope.neve != undefined) params.neve = $scope.neve;
      if ($scope.publikus != undefined) params.publikus = $scope.publikus;
      console.log(params);
      jsonrpc
      .request('termek_slt', params)
      .then(function(result) {
        $scope.result = result.termek_slt;
        console.log('termekSlt - result', result);
      })
      .catch(function(error) {
        $scope.error = error;
        console.log('termekSlt - error', error);
      });
    }
    $scope.termekIns = function () {
      params.kod = $scope.kod;
      params.txk = $rootScope.txk_;
      //params.grp = $rootScope.grp_;
      params.nev = $scope.nev;
      params.neve = $scope.neve;
      params.ebear = $scope.ebear;
      params.dbu = $rootScope.dbu_;
      console.log(params);
      jsonrpc
      .request('termek_ins', params)
      .then(function(result) {
        $scope.result = result.termek_ins;
        console.log('termekIns - result', result);
      })
      .catch(function(error) {
        $scope.error = error;
        console.log('termekIns - error', error);
      });
    }
    $scope.termekUpd = function () {
      params.kod = $scope.kod;
      params.txk = $rootScope.txk_;
      //params.grp = $rootScope.grp_;
      params.nev = $scope.nev;
      params.neve = $scope.neve;
      params.ebear = $scope.ebear;
      params.dbu = $rootScope.dbu_;
      console.log(params);
      jsonrpc
      .request('termek_upd', params)
      .then(function(result) {
        $scope.result = result.termek_upd;
        console.log('termekUpd - result', result);
      })
      .catch(function(error) {
        $scope.error = error;
        console.log('termekUpd - error', error);
      });
    }
    $scope.changeTxk = function () {
      $rootScope.txk_ = '';
      $scope.txk = $rootScope.txk_;
      var termek_kezelo_elem = document.getElementById('termek_kezelo');
      toggleClass(termek_kezelo_elem, 'termek_kezelo_lathatalan', false);
      window.location = "http://kunyx/kunyx-arpc/index.html#/taxkey";
    }
    $scope.changeGrp = function () {
      //$rootScope.grp_ = '';
      //$scope.grp = $rootScope.grp_;
      var termek_kezelo_elem = document.getElementById('termek_kezelo');
      toggleClass(termek_kezelo_elem, 'termek_kezelo_lathatalan', false);
      window.location = "http://kunyx/kunyx-arpc/index.html#/group";
    }
    $scope.selectPrd = function (item) {
      $scope.kod = item.kod;
      $scope.txk = item.txk;
      $scope.grp = item.grp;
      $scope.nev = item.nev;
      $scope.neve = item.neve;
      $scope.ebear = item.ebear;
      $scope.publikus = item.publikus;
      //console.log('grp: ' + $rootScope.grp_);
      console.log('txk: ' + $rootScope.txk_);
    }
    /* $scope.termekDel = function () {
      params.kod = $scope.kod;
      console.log(params);
      jsonrpc
      .request('termek_del', params)
      .then(function(result) {
        $scope.result = result.termek_del;
        console.log('termekDel - result',result);
      })
      .catch(function(error) {
        $scope.error = error;
        console.log('termekDel - error', error);
      });
    } */
    $scope.onTxk_change = function () {
      console.log('afa_kod.', $scope.afa_kod);
      for (const item of $scope.afak) {
        if (item.kod[0] == $scope.afa_kod)
        $scope.selectTxk(item);
      }
    }
    $scope.ddl_afa = function () {
      //console.log('params', params);
      jsonrpc
      .request('taxkey_slt', { kod: '', afa: '', inf: '' })
      .then(function(result) {
        $scope.afak = result.taxkey_slt;
        console.log('afak', $scope.afak);
        for (const item of $scope.afak) {
          $scope.ddlist_afa.push(item);
        }
      })
      .catch(function(error) {
        $scope.error = error;
        console.log('error', error);
      });
    }
    $scope.onGrp_change = function () {
      console.log('grp_kod.', $scope.grp_kod);
      for (const item of $scope.grps) {
        if (item.kod == $scope.grp_kod)
        $scope.selectGrp(item);
      }
    }
    $scope.ddl_grp = function () {
      //console.log('params', params);
      jsonrpc
      .request('group_slt', { kod: '', nev: '' })
      .then(function(result) {
        $scope.grps = result.group_slt;
        console.log('grps', $scope.grps);
        for (const item of $scope.grps) {
          $scope.ddlist_grp.push(item);
        }
      })
      .catch(function(error) {
        $scope.error = error;
        console.log('error', error);
      });
    }
    $scope.ddl_afa();
    $scope.ddl_grp();
}]);
