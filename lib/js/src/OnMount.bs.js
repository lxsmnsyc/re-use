'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var IsomorphicEffectOnce$ReUse = require("./IsomorphicEffectOnce.bs.js");

function call(effect) {
  return IsomorphicEffectOnce$ReUse.call((function (param) {
                Curry._1(effect, /* () */0);
                return ;
              }));
}

exports.call = call;
/* IsomorphicEffectOnce-ReUse Not a pure module */
