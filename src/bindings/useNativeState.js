'use strict';

var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var React = require("react");
var useConstant = require("./useConstant.js");

function useNativeState(supplier) {
  var result = React.useRef();
  var initial = React.useRef(true);
  var forceUpdateTuple = React.useState({});

  var dispatch = useConstant(function () {
    return function (supplier) {
      var proposed = supplier(result.current);

      if (Caml_obj.caml_notequal(result.current, proposed)) {
        result.current = proposed;
        forceUpdateTuple[1]({});
      }
    }
  });
  
  if (initial.current) {
    initial.current = false;
    result.current = supplier();
  }

  return [result.current, dispatch];
}


module.exports = useNativeState;
