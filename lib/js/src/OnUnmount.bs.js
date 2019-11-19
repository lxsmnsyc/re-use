'use strict';

var EffectOnce$ReUse = require("./EffectOnce.bs.js");

function call(effect) {
  return EffectOnce$ReUse.call((function (param) {
                return effect;
              }));
}

exports.call = call;
/* EffectOnce-ReUse Not a pure module */
