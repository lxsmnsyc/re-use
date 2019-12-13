'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var UseNativeStateJs = require("./bindings/useNativeState.js");

function call(prim) {
  return UseNativeStateJs((function () {
                return Curry._1(prim, /* () */0);
              }));
}

exports.call = call;
/* ./bindings/useNativeState.js Not a pure module */
