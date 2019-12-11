'use strict';

var React = require("react");

function call(initial) {
  return React.useRef({
              contents: initial
            }).current;
}

exports.call = call;
/* react Not a pure module */
