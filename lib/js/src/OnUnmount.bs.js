'use strict';

var IsomorphicEffectOnce$ReUse = require("./IsomorphicEffectOnce.bs.js");

function call(effect) {
  return IsomorphicEffectOnce$ReUse.call((function (param) {
                return effect;
              }));
}

exports.call = call;
/* IsomorphicEffectOnce-ReUse Not a pure module */
