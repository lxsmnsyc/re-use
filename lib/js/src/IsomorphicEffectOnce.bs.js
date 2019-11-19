'use strict';

var IsomorphicEffect$ReUse = require("./IsomorphicEffect.bs.js");

function call(effect) {
  return IsomorphicEffect$ReUse.call1(effect, /* array */[]);
}

exports.call = call;
/* IsomorphicEffect-ReUse Not a pure module */
