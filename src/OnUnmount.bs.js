'use strict';

var IsomorphicEffect$ReUse = require("./IsomorphicEffect.bs.js");

function call(effect) {
  return IsomorphicEffect$ReUse.call0((function (param) {
                return effect;
              }));
}

exports.call = call;
/* IsomorphicEffect-ReUse Not a pure module */
