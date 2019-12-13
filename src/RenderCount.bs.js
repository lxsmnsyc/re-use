'use strict';

var Mutable$ReUse = require("./Mutable.bs.js");

function call(param) {
  var counter = Mutable$ReUse.call(0);
  counter.contents = counter.contents + 1 | 0;
  return counter.contents;
}

exports.call = call;
/* Mutable-ReUse Not a pure module */
