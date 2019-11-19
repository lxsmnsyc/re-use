'use strict';

var React = require("react");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Mutable$ReUse = require("./Mutable.bs.js");

function call(state) {
  var ref = Mutable$ReUse.call(undefined);
  React.useEffect((function () {
          ref[0] = Caml_option.some(state);
          return ;
        }), /* array */[state]);
  return ref[0];
}

exports.call = call;
/* react Not a pure module */
