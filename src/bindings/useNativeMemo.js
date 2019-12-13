'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var React = require("react");

function useNativeMemo(callback, dependency) {
  var result = React.useRef();
  var initial = React.useRef(true);
  var deps = React.useRef(dependency);
  if (initial.current || Caml_obj.caml_notequal(deps.current, dependency)) {
    initial.current = false;
    result.current = Curry._1(callback, /* () */0);
    deps.current = dependency;
  }
  return result.current;
}


module.exports = useNativeMemo;
