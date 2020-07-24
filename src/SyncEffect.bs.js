'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var MutableCleanup$ReUse = require("./MutableCleanup.bs.js");

function use(effect) {
  var cleanup = MutableCleanup$ReUse.use(undefined);
  return React.useMemo(function () {
              var fn = cleanup.contents;
              if (fn !== undefined) {
                Curry._1(fn, undefined);
              }
              cleanup.contents = Curry._1(effect, undefined);
              
            });
}

function use0(effect) {
  var cleanup = MutableCleanup$ReUse.use(undefined);
  return React.useMemo((function () {
                var fn = cleanup.contents;
                if (fn !== undefined) {
                  Curry._1(fn, undefined);
                }
                cleanup.contents = Curry._1(effect, undefined);
                
              }), []);
}

function use1(effect, deps) {
  var cleanup = MutableCleanup$ReUse.use(undefined);
  return React.useMemo((function () {
                var fn = cleanup.contents;
                if (fn !== undefined) {
                  Curry._1(fn, undefined);
                }
                cleanup.contents = Curry._1(effect, undefined);
                
              }), deps);
}

function use2(effect, deps) {
  var cleanup = MutableCleanup$ReUse.use(undefined);
  return React.useMemo((function () {
                var fn = cleanup.contents;
                if (fn !== undefined) {
                  Curry._1(fn, undefined);
                }
                cleanup.contents = Curry._1(effect, undefined);
                
              }), deps);
}

function use3(effect, deps) {
  var cleanup = MutableCleanup$ReUse.use(undefined);
  return React.useMemo((function () {
                var fn = cleanup.contents;
                if (fn !== undefined) {
                  Curry._1(fn, undefined);
                }
                cleanup.contents = Curry._1(effect, undefined);
                
              }), deps);
}

function use4(effect, deps) {
  var cleanup = MutableCleanup$ReUse.use(undefined);
  return React.useMemo((function () {
                var fn = cleanup.contents;
                if (fn !== undefined) {
                  Curry._1(fn, undefined);
                }
                cleanup.contents = Curry._1(effect, undefined);
                
              }), deps);
}

function use5(effect, deps) {
  var cleanup = MutableCleanup$ReUse.use(undefined);
  return React.useMemo((function () {
                var fn = cleanup.contents;
                if (fn !== undefined) {
                  Curry._1(fn, undefined);
                }
                cleanup.contents = Curry._1(effect, undefined);
                
              }), deps);
}

function use6(effect, deps) {
  var cleanup = MutableCleanup$ReUse.use(undefined);
  return React.useMemo((function () {
                var fn = cleanup.contents;
                if (fn !== undefined) {
                  Curry._1(fn, undefined);
                }
                cleanup.contents = Curry._1(effect, undefined);
                
              }), deps);
}

function use7(effect, deps) {
  var cleanup = MutableCleanup$ReUse.use(undefined);
  React.useMemo((function () {
          var fn = cleanup.contents;
          if (fn !== undefined) {
            Curry._1(fn, undefined);
          }
          cleanup.contents = Curry._1(effect, undefined);
          
        }), deps);
  
}

exports.use = use;
exports.use0 = use0;
exports.use1 = use1;
exports.use2 = use2;
exports.use3 = use3;
exports.use4 = use4;
exports.use5 = use5;
exports.use6 = use6;
exports.use7 = use7;
/* react Not a pure module */
