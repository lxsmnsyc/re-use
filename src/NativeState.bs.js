'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var ConstantCallback$ReUse = require("./ConstantCallback.bs.js");

function use(initialState) {
  var match = React.useState(function () {
        return Curry._1(initialState, undefined);
      });
  var setState = match[1];
  var dispatch = ConstantCallback$ReUse.use(function (action) {
        return Curry._1(setState, (function (prevState) {
                      var newState = Curry._1(action, prevState);
                      if (Caml_obj.caml_notequal(prevState, newState)) {
                        return newState;
                      } else {
                        return prevState;
                      }
                    }));
      });
  return [
          match[0],
          dispatch
        ];
}

exports.use = use;
/* react Not a pure module */
