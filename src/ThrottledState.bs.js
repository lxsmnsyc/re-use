'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Mutable$ReUse = require("./Mutable.bs.js");
var OnUnmount$ReUse = require("./OnUnmount.bs.js");

function use(timeout, initialState) {
  var match = React.useState(function () {
        return Curry._1(initialState, undefined);
      });
  var setState = match[1];
  var ref = Mutable$ReUse.use(undefined);
  OnUnmount$ReUse.use(function (param) {
        var value = ref.contents;
        if (value !== undefined) {
          clearTimeout(Caml_option.valFromOption(value));
          return ;
        }
        
      });
  var set = React.useCallback((function (value) {
          if (ref.contents === undefined) {
            Curry._1(setState, value);
            ref.contents = Caml_option.some(setTimeout((function (param) {
                        ref.contents = undefined;
                        
                      }), timeout));
            return ;
          }
          
        }), [timeout]);
  return [
          match[0],
          set
        ];
}

exports.use = use;
/* react Not a pure module */
