'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/lib/js/src/ReactDOMRe.js");
var ReasonReactRouter = require("reason-react/lib/js/src/ReasonReactRouter.js");
var Constant$ReasonReactExamples = require("./Constant.bs.js");

function Index$Nav(Props) {
  return React.createElement("ul", undefined, React.createElement("li", undefined, React.createElement("a", {
                      href: "/#/constant"
                    }, "Constant Demo")), React.createElement("li", undefined, React.createElement("a", {
                      href: "/#/constant-callback"
                    }, "ConstantCallback Demo")), React.createElement("li", undefined, React.createElement("a", {
                      href: "/#/native-state"
                    }, "NativeState Demo")));
}

var Nav = {
  make: Index$Nav
};

function Index$App(Props) {
  var url = ReasonReactRouter.useUrl(undefined, /* () */0);
  var match = url.hash;
  switch (match) {
    case "/" :
        return React.createElement(Index$Nav, { });
    case "/constant" :
        return React.createElement(Constant$ReasonReactExamples.Demo.make, { });
    default:
      return React.createElement(Index$Nav, { });
  }
}

var App = {
  make: Index$App
};

ReactDOMRe.renderToElementWithId(React.createElement(Index$App, { }), "app");

exports.Nav = Nav;
exports.App = App;
/*  Not a pure module */
