'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Mutable$ReUse = require("./Mutable.bs.js");
var IsomorphicEffect$ReUse = require("./IsomorphicEffect.bs.js");

function call(effect) {
  var ref = Mutable$ReUse.call(true);
  return IsomorphicEffect$ReUse.call((function (param) {
                if (ref.contents) {
                  ref.contents = true;
                  return ;
                } else {
                  return Curry._1(effect, /* () */0);
                }
              }));
}

function call1(effect, dependencies) {
  var ref = Mutable$ReUse.call(true);
  return IsomorphicEffect$ReUse.call1((function (param) {
                if (ref.contents) {
                  ref.contents = true;
                  return ;
                } else {
                  return Curry._1(effect, /* () */0);
                }
              }), dependencies);
}

function call2(effect, dependencies) {
  var ref = Mutable$ReUse.call(true);
  return IsomorphicEffect$ReUse.call2((function (param) {
                if (ref.contents) {
                  ref.contents = true;
                  return ;
                } else {
                  return Curry._1(effect, /* () */0);
                }
              }), dependencies);
}

function call3(effect, dependencies) {
  var ref = Mutable$ReUse.call(true);
  return IsomorphicEffect$ReUse.call3((function (param) {
                if (ref.contents) {
                  ref.contents = true;
                  return ;
                } else {
                  return Curry._1(effect, /* () */0);
                }
              }), dependencies);
}

function call4(effect, dependencies) {
  var ref = Mutable$ReUse.call(true);
  return IsomorphicEffect$ReUse.call4((function (param) {
                if (ref.contents) {
                  ref.contents = true;
                  return ;
                } else {
                  return Curry._1(effect, /* () */0);
                }
              }), dependencies);
}

function call5(effect, dependencies) {
  var ref = Mutable$ReUse.call(true);
  return IsomorphicEffect$ReUse.call5((function (param) {
                if (ref.contents) {
                  ref.contents = true;
                  return ;
                } else {
                  return Curry._1(effect, /* () */0);
                }
              }), dependencies);
}

function call6(effect, dependencies) {
  var ref = Mutable$ReUse.call(true);
  return IsomorphicEffect$ReUse.call6((function (param) {
                if (ref.contents) {
                  ref.contents = true;
                  return ;
                } else {
                  return Curry._1(effect, /* () */0);
                }
              }), dependencies);
}

function call7(effect, dependencies) {
  var ref = Mutable$ReUse.call(true);
  return IsomorphicEffect$ReUse.call7((function (param) {
                if (ref.contents) {
                  ref.contents = true;
                  return ;
                } else {
                  return Curry._1(effect, /* () */0);
                }
              }), dependencies);
}

exports.call = call;
exports.call1 = call1;
exports.call2 = call2;
exports.call3 = call3;
exports.call4 = call4;
exports.call5 = call5;
exports.call6 = call6;
exports.call7 = call7;
/* Mutable-ReUse Not a pure module */
