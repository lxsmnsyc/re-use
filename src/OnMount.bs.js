'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var IsomorphicEffect$ReUse = require("./IsomorphicEffect.bs.js");

function use(effect) {
  return IsomorphicEffect$ReUse.use0(function (param) {
              Curry._1(effect, undefined);
              
            });
}

exports.use = use;
/* IsomorphicEffect-ReUse Not a pure module */
