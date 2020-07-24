'use strict';

var NativeMemo$ReUse = require("./NativeMemo.bs.js");

function use(callback, deps) {
  return NativeMemo$ReUse.use((function (param) {
                return callback;
              }), deps);
}

exports.use = use;
/* NativeMemo-ReUse Not a pure module */
