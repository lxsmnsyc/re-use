'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var UseNativeMemoJs = require("./bindings/useNativeMemo.js");

function call(prim, prim$1) {
  return UseNativeMemoJs((function () {
                return Curry._1(prim, /* () */0);
              }), prim$1);
}

exports.call = call;
/* ./bindings/useNativeMemo.js Not a pure module */
