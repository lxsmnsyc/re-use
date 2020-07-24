'use strict';

var IsomorphicEffect$ReUse = require("./IsomorphicEffect.bs.js");

function use(effect) {
  return IsomorphicEffect$ReUse.use0(function (param) {
              return effect;
            });
}

exports.use = use;
/* IsomorphicEffect-ReUse Not a pure module */
