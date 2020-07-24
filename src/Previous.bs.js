'use strict';

var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Mutable$ReUse = require("./Mutable.bs.js");
var IsomorphicEffect$ReUse = require("./IsomorphicEffect.bs.js");

function use(state) {
  var ref = Mutable$ReUse.use(undefined);
  IsomorphicEffect$ReUse.use1((function (param) {
          ref.contents = Caml_option.some(state);
          
        }), [state]);
  return ref.contents;
}

exports.use = use;
/* Mutable-ReUse Not a pure module */
