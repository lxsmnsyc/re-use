'use strict';

var RefMounted$ReUse = require("./RefMounted.bs.js");
var ConstantCallback$ReUse = require("./ConstantCallback.bs.js");

function call(param) {
  var mounted = RefMounted$ReUse.call(/* () */0);
  return ConstantCallback$ReUse.call((function (param) {
                return mounted.contents;
              }));
}

exports.call = call;
/* RefMounted-ReUse Not a pure module */
