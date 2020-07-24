'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Mutable$ReUse = require("./Mutable.bs.js");

function use(supplier) {
  var ref = Mutable$ReUse.use(undefined);
  var value = ref.contents;
  if (value !== undefined) {
    return Caml_option.valFromOption(value);
  }
  var value$1 = Curry._1(supplier, undefined);
  ref.contents = Caml_option.some(value$1);
  return value$1;
}

exports.use = use;
/* Mutable-ReUse Not a pure module */
