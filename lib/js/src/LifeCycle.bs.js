'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var EffectOnce$ReUse = require("./EffectOnce.bs.js");

function call(param) {
  var onUnmount = param[/* onUnmount */1];
  var onMount = param[/* onMount */0];
  return EffectOnce$ReUse.call((function (param) {
                Curry._1(onMount, /* () */0);
                return onUnmount;
              }));
}

exports.call = call;
/* EffectOnce-ReUse Not a pure module */
