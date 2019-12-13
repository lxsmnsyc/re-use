'use strict';

var NativeMemo$ReUse = require("./NativeMemo.bs.js");

function call(callback, deps) {
  return NativeMemo$ReUse.call((function (param) {
                return callback;
              }), deps);
}

exports.call = call;
/* NativeMemo-ReUse Not a pure module */
