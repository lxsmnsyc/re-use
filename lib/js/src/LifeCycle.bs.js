'use strict';

var OnMount$ReUse = require("./OnMount.bs.js");
var OnUnmount$ReUse = require("./OnUnmount.bs.js");

function call(param) {
  OnMount$ReUse.call(param[/* onMount */0]);
  return OnUnmount$ReUse.call(param[/* onUnmount */1]);
}

exports.call = call;
/* OnMount-ReUse Not a pure module */
