'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Mutable$ReUse = require("./Mutable.bs.js");
var IsomorphicEffect$ReUse = require("./IsomorphicEffect.bs.js");

function use(effect) {
  var ref = Mutable$ReUse.use(true);
  return IsomorphicEffect$ReUse.use(function (param) {
              if (ref.contents) {
                ref.contents = true;
                return ;
              } else {
                return Curry._1(effect, undefined);
              }
            });
}

function use1(effect, dependencies) {
  var ref = Mutable$ReUse.use(true);
  return IsomorphicEffect$ReUse.use1((function (param) {
                if (ref.contents) {
                  ref.contents = true;
                  return ;
                } else {
                  return Curry._1(effect, undefined);
                }
              }), dependencies);
}

function use2(effect, dependencies) {
  var ref = Mutable$ReUse.use(true);
  return IsomorphicEffect$ReUse.use2((function (param) {
                if (ref.contents) {
                  ref.contents = true;
                  return ;
                } else {
                  return Curry._1(effect, undefined);
                }
              }), dependencies);
}

function use3(effect, dependencies) {
  var ref = Mutable$ReUse.use(true);
  return IsomorphicEffect$ReUse.use3((function (param) {
                if (ref.contents) {
                  ref.contents = true;
                  return ;
                } else {
                  return Curry._1(effect, undefined);
                }
              }), dependencies);
}

function use4(effect, dependencies) {
  var ref = Mutable$ReUse.use(true);
  return IsomorphicEffect$ReUse.use4((function (param) {
                if (ref.contents) {
                  ref.contents = true;
                  return ;
                } else {
                  return Curry._1(effect, undefined);
                }
              }), dependencies);
}

function use5(effect, dependencies) {
  var ref = Mutable$ReUse.use(true);
  return IsomorphicEffect$ReUse.use5((function (param) {
                if (ref.contents) {
                  ref.contents = true;
                  return ;
                } else {
                  return Curry._1(effect, undefined);
                }
              }), dependencies);
}

function use6(effect, dependencies) {
  var ref = Mutable$ReUse.use(true);
  return IsomorphicEffect$ReUse.use6((function (param) {
                if (ref.contents) {
                  ref.contents = true;
                  return ;
                } else {
                  return Curry._1(effect, undefined);
                }
              }), dependencies);
}

function use7(effect, dependencies) {
  var ref = Mutable$ReUse.use(true);
  return IsomorphicEffect$ReUse.use7((function (param) {
                if (ref.contents) {
                  ref.contents = true;
                  return ;
                } else {
                  return Curry._1(effect, undefined);
                }
              }), dependencies);
}

exports.use = use;
exports.use1 = use1;
exports.use2 = use2;
exports.use3 = use3;
exports.use4 = use4;
exports.use5 = use5;
exports.use6 = use6;
exports.use7 = use7;
/* Mutable-ReUse Not a pure module */
