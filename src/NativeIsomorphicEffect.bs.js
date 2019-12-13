'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Mutable$ReUse = require("./Mutable.bs.js");
var IsomorphicEffect$ReUse = require("./IsomorphicEffect.bs.js");

function call(effect, dependency) {
  var initial = Mutable$ReUse.call(true);
  var cleanup = Mutable$ReUse.call(undefined);
  var deps = Mutable$ReUse.call(dependency);
  return IsomorphicEffect$ReUse.call((function (param) {
                if (initial.contents || Caml_obj.caml_notequal(deps.contents, dependency)) {
                  initial.contents = false;
                  var match = cleanup.contents;
                  if (match !== undefined) {
                    Curry._1(match, /* () */0);
                  }
                  cleanup.contents = Curry._1(effect, /* () */0);
                  deps.contents = dependency;
                }
                return ;
              }));
}

exports.call = call;
/* Mutable-ReUse Not a pure module */
