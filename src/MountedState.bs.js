'use strict';

var RefMounted$ReUse = require("./RefMounted.bs.js");
var ConstantCallback$ReUse = require("./ConstantCallback.bs.js");

function use(param) {
  var mounted = RefMounted$ReUse.use(undefined);
  return ConstantCallback$ReUse.use(function (param) {
              return mounted.contents;
            });
}

exports.use = use;
/* RefMounted-ReUse Not a pure module */
