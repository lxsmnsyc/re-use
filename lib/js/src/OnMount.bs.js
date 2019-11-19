'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var EffectOnce$ReUse = require("./EffectOnce.bs.js");

function call(effect) {
  return EffectOnce$ReUse.call((function (param) {
                Curry._1(effect, /* () */0);
                return ;
              }));
}

exports.call = call;
/* EffectOnce-ReUse Not a pure module */
