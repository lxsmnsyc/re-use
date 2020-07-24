'use strict';

var Mutable$ReUse = require("./Mutable.bs.js");

function use(param) {
  var counter = Mutable$ReUse.use(0);
  counter.contents = counter.contents + 1 | 0;
  return counter.contents;
}

exports.use = use;
/* Mutable-ReUse Not a pure module */
