'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var IsomorphicEffect$ReUse = require("./IsomorphicEffect.bs.js");

function call(effect) {
  return IsomorphicEffect$ReUse.call0((function (param) {
                Curry._1(effect, /* () */0);
                return ;
              }));
}

exports.call = call;
/* IsomorphicEffect-ReUse Not a pure module */
