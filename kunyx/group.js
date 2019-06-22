'use strict';

angular.module('xrpcJsonApp')
.controller('groupCtrl', ['$scope', 'jsonrpc',
function ($scope, jsonrpc) {
  $scope.kod = '-----';
  $scope.nev_1 = '';
  $scope.nev_2 = '';
  $scope.nev_3 = '';
  $scope.nev_4 = '';
  $scope.nev_5 = '';
  $scope.selectGrp = function (item) {
    console.log('selectGrp');
    $scope.kod = item.KOD;
    console.log('$scope.kod: ', $scope.kod);
    var nulak_szama = 0;
    for(var idx=0; idx < item.KOD.length; idx++) {
      if (item.KOD[idx] == '0')
        nulak_szama += 1;
    }
    var szint = 5 - nulak_szama;
    console.log('__szint__', szint);
    switch (szint) {
      case 1:
        $scope.nev_1 = item.NEV;
        console.log('$scope.nev_1: ', $scope.nev_1);
        if ($scope.szint_1ok())
          $scope.x_nev1 = $scope.nev_1;
      break;
      case 2:
        $scope.nev_2 = item.NEV;
        console.log('$scope.nev_2: ', $scope.nev_2);
        if ($scope.szint_2ok())
          $scope.x_nev2 = $scope.nev_2;
      break;
      case 3:
        $scope.nev_3 = item.NEV;
        console.log('$scope.nev_3: ', $scope.nev_3);
        if ($scope.szint_3ok())
          $scope.x_nev3 = $scope.nev_3;
      break;
      case 4:
        $scope.nev_4 = item.NEV;
        //console.log('$scope.nev_4: ', $scope.nev_4);
      break;
      case 5:
        $scope.nev_5 = item.NEV;
        //console.log('$scope.nev_5: ', $scope.nev_5);
      break;
    }
  }
  $scope.gomb_lathato = function (eset) {
    var res = false;
    console.log('$scope.kod: ', $scope.kod);
    var nulak_szama = 0;
    for(var idx=0; idx < $scope.kod.length; idx++) {
      if ($scope.kod[idx] == '0')
        nulak_szama += 1;
    }
    var szint = 5 - nulak_szama;
    console.log('__szint__', szint);
    switch (szint) {
      case 1:
        if (eset == 'del' && $scope.x_nev1 != 'add_new' && $scope.x_nev1 != undefined)
          res = true;
        if (eset == 'upd' && $scope.x_nev1 != 'add_new' && $scope.x_nev1 != undefined)
          res = true;
        if (eset == 'add' && ($scope.x_nev1 == 'add_new' || $scope.x_nev1 == undefined))
          res = true;
        console.log('gomb_lathato', eset, res);
      break;
      case 2:
        if (eset == 'del' && $scope.x_nev2 != 'add_new' && $scope.x_nev2 != undefined)
          res = true;
        if (eset == 'upd' && $scope.x_nev2 != 'add_new' && $scope.x_nev2 != undefined)
          res = true;
        if (eset == 'add' && ($scope.x_nev2 == 'add_new' || $scope.x_nev2 == undefined))
          res = true;
        console.log('gomb_lathato', eset, res);
      break;
      case 3:
        if (eset == 'del' && $scope.x_nev3 != 'add_new' && $scope.x_nev3 != undefined)
          res = true;
        if (eset == 'upd' && $scope.x_nev3 != 'add_new' && $scope.x_nev3 != undefined)
          res = true;
        if (eset == 'add' && ($scope.x_nev3 == 'add_new' || $scope.x_nev3 == undefined))
          res = true;
        console.log('gomb_lathato', eset, res);
      break;
      case 4:
        //console.log('gomb_lathato', eset, res);
      break;
      case 5:
        //console.log('gomb_lathato', eset, res);
      break;
    }
    return res;
  }
//------------- 1. szint
  $scope.ddlszint_1 = [];
  $scope.ddl_1szint = function () {
    var szint_1 = '0000';
    var minta = '_' + szint_1;
    console.log('ddl_1szint minta', minta);
    jsonrpc
    .request('csoport_slt', { kod: minta })
    .then(function(result) {
      $scope.ddlszint_1 = result.csoport_slt;      
      console.log('ddlszint_1', $scope.ddlszint_1);
    })
    .catch(function(error) {
      $scope.error = error;
      console.log('error', error);
    });
  }
  $scope.ddl_1szint();
  $scope.szint1_valt = function () {
    console.log('szint1_valt');
    console.log('x_nev1', $scope.x_nev1);
    console.log('ddlszint_1', $scope.ddlszint_1);
    for (const item of $scope.ddlszint_1) {
      if (item.NEV == $scope.x_nev1) {
        console.log('item.NEV', item.NEV);
        $scope.selectGrp(item);
        $scope.ddl_2szint();
      }
    }
  }
  $scope.szint_1ok = function () {
    var result = false;
    if ($scope.nev_1 != '') {
      result = true;
    }
    console.log('szint_1ok', result);
    return result;
  }
  //------------- 2. szint
  $scope.ddlszint_2 = [];
  $scope.ddl_2szint = function () {
    var szuro_1 = $scope.kod.substr(0,1);
    var szint_2 = $scope.kod.substr(2);
    var minta = szuro_1 + '_' + szint_2;
    console.log('ddl_2szint minta', minta);
    jsonrpc
    .request('csoport_slt', { kod: minta })
    .then(function(result) {
      $scope.ddlszint_2 = result.csoport_slt;
      console.log('ddlszint_2', $scope.ddlszint_2);
    })
    .catch(function(error) {
      $scope.error = error;
      console.log('error', error);
    });
  }
  $scope.szint2_valt = function () {
    console.log('szint2_valt');
    console.log('x_nev2', $scope.x_nev2);
    console.log('ddlszint_2', $scope.ddlszint_2);
    for (const item of $scope.ddlszint_2) {
      if (item.NEV == $scope.x_nev2) {
        console.log('item.NEV', item.NEV);
        $scope.selectGrp(item);
        $scope.ddl_3szint();
      }
    }
  }
  $scope.szint_2ok = function () {
    var result = false;
    if ($scope.nev_2 != '') {
      result = true;
    }
    console.log('szint_2ok', result);
    return result;
  }
  //------------- 3. szint
  $scope.ddlszint_3 = [];
  $scope.ddl_3szint = function () {
    var szuro_2 = $scope.kod.substr(0,2);
    var szint_3 = $scope.kod.substr(3);
    var minta = szuro_2 + '_' + szint_3;
    console.log('ddl_3szint minta', minta);
    jsonrpc
    .request('csoport_slt', { kod: minta })
    .then(function(result) {
      $scope.ddlszint_3 = result.csoport_slt;
      console.log('ddlszint_3', $scope.ddlszint_3);
    })
    .catch(function(error) {
      $scope.error = error;
      console.log('error', error);
    });
  }
  $scope.szint3_valt = function () {
    console.log('szint3_valt');
    console.log('x_nev3', $scope.x_nev3);
    for (const item of $scope.ddlszint_3) {
      if (item.NEV == $scope.x_nev3) {
        console.log('item.NEV', item.NEV);
        $scope.selectGrp(item);
        $scope.ddl_4szint();
      }
    }
  }
  $scope.szint_3ok = function () {
    var result = false;
    if ($scope.nev_3 != '') {
      result = true;
    }
    console.log('szint_3ok', result);
    return result;
  }
  //------------- 4. szint
  $scope.ddlszint_4 = [];
  $scope.ddl_4szint = function () {
    ///////////////////////////////
  }
  //-------- DB-muveletek
  $scope.upd_ervenyes= function (item) {
    if ($scope.kod == item.kod)
      return true;
    else return false;
  }
  var params = { kod: '', nev: '' };
  $scope.groupUpd = function () {
    params.kod = $scope.kod;
    params.nev = $scope.nev;
    console.log(params);
    jsonrpc
    .request('group_upd', params)
    .then(function (result) {
      $scope.result = result.group_upd;
      console.log(result);
    })
    .catch(function (error) {
      $scope.error = error;
      console.log(error);
    });
  }
  $scope.groupIns = function () {
    params.kod = $scope.kod;
    params.nev = $scope.nev;
    console.log(params);
    jsonrpc
    .request('group_ins', params)
    .then(function (result) {
      $scope.result = result.group_ins;
      console.log(result);
    })
    .catch(function (error) {
      $scope.error = error;
      console.log(error);
    });
  }
  $scope.groupDel = function () {
    params.kod = $scope.kod;
    console.log(params);
    jsonrpc
    .request('group_del', params)
    .then(function (result) {
      $scope.result = result.group_del;
      console.log(result);
    })
    .catch(function (error) {
      $scope.error = error;
      console.log(error);
    });
  }
}]);
