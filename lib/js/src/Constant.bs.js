'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

function call(supplier, $$default) {
  var ref = React.useRef(undefined);
  if (ref.current === undefined) {
    ref.current = Caml_option.some(Curry._1(supplier, /* () */0));
  }
  var match = ref.current;
  if (match !== undefined) {
    return Caml_option.valFromOption(match);
  } else {
    return $$default;
  }
}

exports.call = call;
/* react Not a pure module */
