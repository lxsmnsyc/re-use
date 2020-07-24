'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Mutable$ReUse = require("./Mutable.bs.js");

function use(supplier, dependency) {
  var deps = Mutable$ReUse.use(dependency);
  var result = Mutable$ReUse.use(undefined);
  if (Caml_obj.caml_notequal(deps.contents, dependency)) {
    result.contents = Caml_option.some(Curry._1(supplier, undefined));
    deps.contents = dependency;
  }
  var value = result.contents;
  if (value !== undefined) {
    return Caml_option.valFromOption(value);
  }
  var value$1 = Curry._1(supplier, undefined);
  result.contents = Caml_option.some(value$1);
  return value$1;
}

exports.use = use;
/* Mutable-ReUse Not a pure module */
