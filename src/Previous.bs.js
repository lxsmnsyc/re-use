'use strict';

var React = require("react");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Mutable$ReUse = require("./Mutable.bs.js");

function call(state) {
  var ref = Mutable$ReUse.call(undefined);
  React.useEffect((function () {
          ref.contents = Caml_option.some(state);
          return ;
        }), /* array */[state]);
  return ref.contents;
}

exports.call = call;
/* react Not a pure module */
