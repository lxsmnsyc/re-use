'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var IsomorphicEffect$ReUse = require("./IsomorphicEffect.bs.js");

function use(param) {
  var onUnmount = param.onUnmount;
  var onMount = param.onMount;
  return IsomorphicEffect$ReUse.use0(function (param) {
              Curry._1(onMount, undefined);
              return onUnmount;
            });
}

exports.use = use;
/* IsomorphicEffect-ReUse Not a pure module */
