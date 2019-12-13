'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var RandomJs = require("./bindings/random.js");
var ConstantCallback$ReUse = require("@lxsmnsyc/re-use/src/ConstantCallback.bs.js");

function random(prim) {
  return RandomJs();
}

function ConstantCallback$Demo(Props) {
  var match = React.useState((function () {
          return false;
        }));
  var setState = match[1];
  var state = match[0];
  var ref = React.useRef(undefined);
  var callback = ConstantCallback$ReUse.call((function (param) {
          return RandomJs();
        }));
  ref.current = callback;
  var match$1 = ref.current;
  return React.createElement(React.Fragment, {
              children: null
            }, match$1 !== undefined ? React.createElement("h1", undefined, "Changed? " + Pervasives.string_of_bool(Caml_obj.caml_notequal(match$1, callback))) : null, React.createElement("button", {
                  onClick: (function (param) {
                      return Curry._1(setState, (function (param) {
                                    return !state;
                                  }));
                    })
                }, "Force Render"));
}

var Demo = {
  make: ConstantCallback$Demo
};

exports.random = random;
exports.Demo = Demo;
/* react Not a pure module */
