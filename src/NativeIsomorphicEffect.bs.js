'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Mutable$ReUse = require("./Mutable.bs.js");
var MutableCleanup$ReUse = require("./MutableCleanup.bs.js");
var IsomorphicEffect$ReUse = require("./IsomorphicEffect.bs.js");

function use(effect, dependency) {
  var initial = Mutable$ReUse.use(true);
  var cleanup = MutableCleanup$ReUse.use(undefined);
  var deps = Mutable$ReUse.use(dependency);
  return IsomorphicEffect$ReUse.use(function (param) {
              if (initial.contents || Caml_obj.caml_notequal(deps.contents, dependency)) {
                initial.contents = false;
                var fn = cleanup.contents;
                if (fn !== undefined) {
                  Curry._1(fn, undefined);
                }
                cleanup.contents = Curry._1(effect, undefined);
                deps.contents = dependency;
              }
              
            });
}

exports.use = use;
/* Mutable-ReUse Not a pure module */
