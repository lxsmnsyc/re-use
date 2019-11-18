'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Constant$ReUse = require("./Constant.bs.js");

function call(param) {
  var match = React.useReducer((function (state, param) {
          return !state;
        }), false);
  var set = match[1];
  return Constant$ReUse.call((function (param, param$1) {
                return Curry._1(set, /* () */0);
              }));
}

exports.call = call;
/* react Not a pure module */
