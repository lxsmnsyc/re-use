'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");
var Constant$ReasonReactExamples = require("./Constant.bs.js");
var NativeState$ReasonReactExamples = require("./NativeState.bs.js");
var ConstantCallback$ReasonReactExamples = require("./ConstantCallback.bs.js");

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
    case "/constant-callback" :
        return React.createElement(ConstantCallback$ReasonReactExamples.Demo.make, { });
    case "/native-state" :
        return React.createElement(NativeState$ReasonReactExamples.Demo.make, { });
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
