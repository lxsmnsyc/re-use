'use strict';

var React = require("react");

function use(initial) {
  return React.useRef({
              contents: initial
            }).current;
}

exports.use = use;
/* react Not a pure module */
