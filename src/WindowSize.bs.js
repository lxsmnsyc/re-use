'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var IsomorphicEffect$ReUse = require("./IsomorphicEffect.bs.js");

function call(initialWidth, initialHeight) {
  var isClient = typeof window === "undefined";
  var match = React.useState((function () {
          if (isClient) {
            return initialWidth;
          } else {
            return window.innerWidth;
          }
        }));
  var setWidth = match[1];
  var match$1 = React.useState((function () {
          if (isClient) {
            return initialHeight;
          } else {
            return window.innerHeight;
          }
        }));
  var setHeight = match$1[1];
  IsomorphicEffect$ReUse.call1((function (param) {
          if (isClient) {
            var handler = function (param) {
              Curry._1(setWidth, (function (param) {
                      return window.innerWidth;
                    }));
              return Curry._1(setHeight, (function (param) {
                            return window.innerHeight;
                          }));
            };
            window.addEventListener("resive", handler);
            return (function (param) {
                      window.removeEventListener("resize", handler);
                      return /* () */0;
                    });
          }
          
        }), /* array */[isClient]);
  return {
          width: match[0],
          height: match$1[0]
        };
}

exports.call = call;
/* react Not a pure module */
