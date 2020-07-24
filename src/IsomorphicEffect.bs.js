'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var UseIsomorphicEffectJs = require("./bindings/useIsomorphicEffect.js");

function use(prim) {
  UseIsomorphicEffectJs(function () {
        return Curry._1(prim, undefined);
      });
  
}

function use0(prim) {
  UseIsomorphicEffectJs((function () {
          return Curry._1(prim, undefined);
        }), []);
  
}

function use1(prim, prim$1) {
  UseIsomorphicEffectJs((function () {
          return Curry._1(prim, undefined);
        }), prim$1);
  
}

function use2(prim, prim$1) {
  UseIsomorphicEffectJs((function () {
          return Curry._1(prim, undefined);
        }), prim$1);
  
}

function use3(prim, prim$1) {
  UseIsomorphicEffectJs((function () {
          return Curry._1(prim, undefined);
        }), prim$1);
  
}

function use4(prim, prim$1) {
  UseIsomorphicEffectJs((function () {
          return Curry._1(prim, undefined);
        }), prim$1);
  
}

function use5(prim, prim$1) {
  UseIsomorphicEffectJs((function () {
          return Curry._1(prim, undefined);
        }), prim$1);
  
}

function use6(prim, prim$1) {
  UseIsomorphicEffectJs((function () {
          return Curry._1(prim, undefined);
        }), prim$1);
  
}

function use7(prim, prim$1) {
  UseIsomorphicEffectJs((function () {
          return Curry._1(prim, undefined);
        }), prim$1);
  
}

exports.use = use;
exports.use0 = use0;
exports.use1 = use1;
exports.use2 = use2;
exports.use3 = use3;
exports.use4 = use4;
exports.use5 = use5;
exports.use6 = use6;
exports.use7 = use7;
/* ./bindings/useIsomorphicEffect.js Not a pure module */
