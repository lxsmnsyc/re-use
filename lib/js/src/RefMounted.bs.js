'use strict';

var Mutable$ReUse = require("./Mutable.bs.js");
var EffectOnce$ReUse = require("./EffectOnce.bs.js");

function call(param) {
  var ref = Mutable$ReUse.call(false);
  EffectOnce$ReUse.call((function (param) {
          ref[0] = true;
          return (function (param) {
                    ref[0] = false;
                    return /* () */0;
                  });
        }));
  return ref;
}

exports.call = call;
/* Mutable-ReUse Not a pure module */
