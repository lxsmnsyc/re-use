'use strict';

var Mutable$ReUse = require("./Mutable.bs.js");
var IsomorphicEffect$ReUse = require("./IsomorphicEffect.bs.js");

function use(param) {
  var ref = Mutable$ReUse.use(false);
  IsomorphicEffect$ReUse.use0(function (param) {
        ref.contents = true;
        return (function (param) {
                  ref.contents = false;
                  
                });
      });
  return ref;
}

exports.use = use;
/* Mutable-ReUse Not a pure module */
