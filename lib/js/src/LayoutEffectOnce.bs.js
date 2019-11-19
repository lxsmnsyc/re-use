'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function call(effect) {
  React.useLayoutEffect((function () {
          return Curry._1(effect, /* () */0);
        }), /* array */[]);
  return /* () */0;
}

exports.call = call;
/* react Not a pure module */
