'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Mutable$ReUse = require("./Mutable.bs.js");
var OnUnmount$ReUse = require("./OnUnmount.bs.js");

function call(timeout, initialState) {
  var match = React.useState((function () {
          return Curry._1(initialState, /* () */0);
        }));
  var setState = match[1];
  var ref = Mutable$ReUse.call(undefined);
  OnUnmount$ReUse.call((function (param) {
          var match = ref.contents;
          if (match !== undefined) {
            clearTimeout(Caml_option.valFromOption(match));
            return /* () */0;
          } else {
            return /* () */0;
          }
        }));
  var set = React.useCallback((function (value) {
          if (ref.contents === undefined) {
            Curry._1(setState, value);
            ref.contents = Caml_option.some(setTimeout((function (param) {
                        ref.contents = undefined;
                        return /* () */0;
                      }), timeout));
            return /* () */0;
          } else {
            return 0;
          }
        }), /* array */[timeout]);
  return /* tuple */[
          match[0],
          set
        ];
}

exports.call = call;
/* react Not a pure module */
