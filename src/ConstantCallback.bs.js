'use strict';

var Constant$ReUse = require("./Constant.bs.js");

function use(callback) {
  return Constant$ReUse.use(function (param) {
              return callback;
            });
}

exports.use = use;
/* Constant-ReUse Not a pure module */
