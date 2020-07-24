'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ConstantCallback$ReUse = require("./ConstantCallback.bs.js");

function use(param) {
  var match = React.useReducer((function (state, param) {
          return !state;
        }), false);
  var set = match[1];
  return ConstantCallback$ReUse.use(function (param) {
              return Curry._1(set, undefined);
            });
}

exports.use = use;
/* react Not a pure module */
