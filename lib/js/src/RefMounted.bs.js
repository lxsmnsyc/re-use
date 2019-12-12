'use strict';

var Mutable$ReUse = require("./Mutable.bs.js");
var IsomorphicEffect$ReUse = require("./IsomorphicEffect.bs.js");

function call(param) {
  var ref = Mutable$ReUse.call(false);
  IsomorphicEffect$ReUse.call0((function (param) {
          ref.contents = true;
          return (function (param) {
                    ref.contents = false;
                    return /* () */0;
                  });
        }));
  return ref;
}

exports.call = call;
/* Mutable-ReUse Not a pure module */
