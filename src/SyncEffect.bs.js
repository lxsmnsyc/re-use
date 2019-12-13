'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Mutable$ReUse = require("./Mutable.bs.js");

function call(effect) {
  var cleanup = Mutable$ReUse.call(undefined);
  return React.useMemo((function () {
                var match = cleanup.contents;
                if (match !== undefined) {
                  Curry._1(match, /* () */0);
                }
                cleanup.contents = Curry._1(effect, /* () */0);
                return /* () */0;
              }));
}

function call0(effect) {
  var cleanup = Mutable$ReUse.call(undefined);
  return React.useMemo((function () {
                var match = cleanup.contents;
                if (match !== undefined) {
                  Curry._1(match, /* () */0);
                }
                cleanup.contents = Curry._1(effect, /* () */0);
                return /* () */0;
              }), ([]));
}

function call1(effect, deps) {
  var cleanup = Mutable$ReUse.call(undefined);
  return React.useMemo((function () {
                var match = cleanup.contents;
                if (match !== undefined) {
                  Curry._1(match, /* () */0);
                }
                cleanup.contents = Curry._1(effect, /* () */0);
                return /* () */0;
              }), deps);
}

function call2(effect, deps) {
  var cleanup = Mutable$ReUse.call(undefined);
  return React.useMemo((function () {
                var match = cleanup.contents;
                if (match !== undefined) {
                  Curry._1(match, /* () */0);
                }
                cleanup.contents = Curry._1(effect, /* () */0);
                return /* () */0;
              }), deps);
}

function call3(effect, deps) {
  var cleanup = Mutable$ReUse.call(undefined);
  return React.useMemo((function () {
                var match = cleanup.contents;
                if (match !== undefined) {
                  Curry._1(match, /* () */0);
                }
                cleanup.contents = Curry._1(effect, /* () */0);
                return /* () */0;
              }), deps);
}

function call4(effect, deps) {
  var cleanup = Mutable$ReUse.call(undefined);
  return React.useMemo((function () {
                var match = cleanup.contents;
                if (match !== undefined) {
                  Curry._1(match, /* () */0);
                }
                cleanup.contents = Curry._1(effect, /* () */0);
                return /* () */0;
              }), deps);
}

function call5(effect, deps) {
  var cleanup = Mutable$ReUse.call(undefined);
  return React.useMemo((function () {
                var match = cleanup.contents;
                if (match !== undefined) {
                  Curry._1(match, /* () */0);
                }
                cleanup.contents = Curry._1(effect, /* () */0);
                return /* () */0;
              }), deps);
}

function call6(effect, deps) {
  var cleanup = Mutable$ReUse.call(undefined);
  return React.useMemo((function () {
                var match = cleanup.contents;
                if (match !== undefined) {
                  Curry._1(match, /* () */0);
                }
                cleanup.contents = Curry._1(effect, /* () */0);
                return /* () */0;
              }), deps);
}

function call7(effect, deps) {
  var cleanup = Mutable$ReUse.call(undefined);
  React.useMemo((function () {
          var match = cleanup.contents;
          if (match !== undefined) {
            Curry._1(match, /* () */0);
          }
          cleanup.contents = Curry._1(effect, /* () */0);
          return /* () */0;
        }), deps);
  return /* () */0;
}

exports.call = call;
exports.call0 = call0;
exports.call1 = call1;
exports.call2 = call2;
exports.call3 = call3;
exports.call4 = call4;
exports.call5 = call5;
exports.call6 = call6;
exports.call7 = call7;
/* react Not a pure module */
