'use strict';

var Constant$ReUse = require("./Constant.bs.js");

function call(callback) {
  return Constant$ReUse.call((function (param) {
                return callback;
              }));
}

exports.call = call;
/* Constant-ReUse Not a pure module */
