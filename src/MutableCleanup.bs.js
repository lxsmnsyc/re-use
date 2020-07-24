'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Mutable$ReUse = require("./Mutable.bs.js");
var OnUnmount$ReUse = require("./OnUnmount.bs.js");

function use(param) {
  var cleanup = Mutable$ReUse.use(undefined);
  OnUnmount$ReUse.use(function (param) {
        var fn = cleanup.contents;
        if (fn !== undefined) {
          return Curry._1(fn, undefined);
        }
        
      });
  return cleanup;
}

exports.use = use;
/* Mutable-ReUse Not a pure module */
