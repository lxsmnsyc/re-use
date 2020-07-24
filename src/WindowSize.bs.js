'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var IsomorphicEffect$ReUse = require("./IsomorphicEffect.bs.js");

function use(initialWidth, initialHeight) {
  var isClient = typeof window === "undefined";
  var match = React.useState(function () {
        if (isClient) {
          return initialWidth;
        } else {
          return window.innerWidth;
        }
      });
  var setWidth = match[1];
  var match$1 = React.useState(function () {
        if (isClient) {
          return initialHeight;
        } else {
          return window.innerHeight;
        }
      });
  var setHeight = match$1[1];
  IsomorphicEffect$ReUse.use1((function (param) {
          if (!isClient) {
            return ;
          }
          var handler = function (param) {
            Curry._1(setWidth, (function (param) {
                    return window.innerWidth;
                  }));
            return Curry._1(setHeight, (function (param) {
                          return window.innerHeight;
                        }));
          };
          window.addEventListener("resize", handler);
          return (function (param) {
                    window.removeEventListener("resize", handler);
                    
                  });
        }), [isClient]);
  return {
          width: match[0],
          height: match$1[0]
        };
}

exports.use = use;
/* react Not a pure module */
