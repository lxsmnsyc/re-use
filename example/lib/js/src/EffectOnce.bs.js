'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var EffectOnce$ReUse = require("@lxsmnsyc/re-use/lib/js/src/EffectOnce.bs.js");

function EffectOnce$Mountable(Props) {
  Props.flag;
  EffectOnce$ReUse.call((function (param) {
          console.log("Mounted!");
          return (function (param) {
                    console.log("Unmounted!");
                    return /* () */0;
                  });
        }));
  console.log("Re-rendered");
  return React.createElement(React.Fragment, {
              children: React.createElement("h1", undefined, "Mounted")
            });
}

var Mountable = {
  make: EffectOnce$Mountable
};

function EffectOnce$Demo(Props) {
  var match = React.useState((function () {
          return false;
        }));
  var setState = match[1];
  var state = match[0];
  var match$1 = React.useState((function () {
          return false;
        }));
  var toggle = match$1[1];
  return React.createElement(React.Fragment, {
              children: null
            }, state ? React.createElement(EffectOnce$Mountable, {
                    flag: match$1[0]
                  }) : null, React.createElement("button", {
                  onClick: (function (param) {
                      return Curry._1(setState, (function (param) {
                                    return !state;
                                  }));
                    })
                }, state ? "Show" : "Hide"), React.createElement("button", {
                  onClick: (function (param) {
                      return Curry._1(toggle, (function (param) {
                                    return !state;
                                  }));
                    })
                }, "Force Render"));
}

var Demo = {
  make: EffectOnce$Demo
};

exports.Mountable = Mountable;
exports.Demo = Demo;
/* react Not a pure module */
