'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Constant$ReUse = require("@lxsmnsyc/re-use/lib/js/src/Constant.bs.js");
var RandomJs = require("./bindings/random.js");

function random(prim) {
  return RandomJs();
}

function Constant$Demo(Props) {
  var match = React.useState((function () {
          return false;
        }));
  var setState = match[1];
  var state = match[0];
  var constant = Constant$ReUse.call((function (param) {
          return RandomJs();
        }));
  return React.createElement("button", {
              onClick: (function (param) {
                  return Curry._1(setState, (function (param) {
                                return !state;
                              }));
                })
            }, constant.toString());
}

var Demo = {
  make: Constant$Demo
};

exports.random = random;
exports.Demo = Demo;
/* react Not a pure module */
