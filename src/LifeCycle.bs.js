'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var IsomorphicEffect$ReUse = require("./IsomorphicEffect.bs.js");

function call(param) {
  var onUnmount = param.onUnmount;
  var onMount = param.onMount;
  return IsomorphicEffect$ReUse.call0((function (param) {
                Curry._1(onMount, /* () */0);
                return onUnmount;
              }));
}

exports.call = call;
/* IsomorphicEffect-ReUse Not a pure module */
