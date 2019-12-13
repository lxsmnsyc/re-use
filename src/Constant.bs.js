'use strict';

var UseConstantJs = require("./bindings/useConstant.js");

function call(prim) {
  return UseConstantJs(prim);
}

exports.call = call;
/* ./bindings/useConstant.js Not a pure module */
