'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ConstantCallback$ReUse = require("./ConstantCallback.bs.js");
var IsomorphicEffect$ReUse = require("./IsomorphicEffect.bs.js");

function use(param) {
  var match = React.useState(function () {
        return document.visibilityState === "visible";
      });
  var setState = match[1];
  var callback = ConstantCallback$ReUse.use(function (param) {
        return Curry._1(setState, (function (param) {
                      return document.visibilityState === "visibile";
                    }));
      });
  IsomorphicEffect$ReUse.use0(function (param) {
        document.addEventListener("visibilitychange", callback);
        return (function (param) {
                  document.removeEventListener("visibilitychange", callback);
                  
                });
      });
  return match[0];
}

exports.use = use;
/* react Not a pure module */
