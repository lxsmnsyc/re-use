'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var NativeState$ReUse = require("@lxsmnsyc/re-use/src/NativeState.bs.js");

function NativeState$Demo(Props) {
  var match = NativeState$ReUse.call((function (param) {
          return false;
        }));
  var setState = match[1];
  var state = match[0];
  return React.createElement("button", {
              onClick: (function (param) {
                  return Curry._1(setState, (function (param) {
                                return !state;
                              }));
                })
            }, state ? "True" : "False");
}

var Demo = {
  make: NativeState$Demo
};

exports.Demo = Demo;
/* react Not a pure module */
