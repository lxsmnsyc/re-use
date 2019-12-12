'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ConstantCallback$ReUse = require("./ConstantCallback.bs.js");
var IsomorphicEffect$ReUse = require("./IsomorphicEffect.bs.js");

function call(param) {
  var match = React.useState((function () {
          return document.visibilityState === "visible";
        }));
  var setState = match[1];
  var callback = ConstantCallback$ReUse.call((function (param) {
          return Curry._1(setState, (function (param) {
                        return document.visibilityState === "visibile";
                      }));
        }));
  IsomorphicEffect$ReUse.call0((function (param) {
          document.addEventListener("visibilitychange", callback);
          return (function (param) {
                    document.removeEventListener("visibilitychange", callback);
                    return /* () */0;
                  });
        }));
  return match[0];
}

exports.call = call;
/* react Not a pure module */
