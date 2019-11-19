'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/lib/js/src/ReactDOMRe.js");
var ReasonReactRouter = require("reason-react/lib/js/src/ReasonReactRouter.js");
var Constant$ReasonReactExamples = require("./Constant.bs.js");
var EffectOnce$ReasonReactExamples = require("./EffectOnce.bs.js");
var ConstantCallback$ReasonReactExamples = require("./ConstantCallback.bs.js");

function Index$Nav(Props) {
  return React.createElement("ul", undefined, React.createElement("li", undefined, React.createElement("a", {
                      href: "/#/constant"
                    }, "Constant Demo")), React.createElement("li", undefined, React.createElement("a", {
                      href: "/#/constant-callback"
                    }, "ConstantCallback Demo")), React.createElement("li", undefined, React.createElement("a", {
                      href: "/#/effect-once"
                    }, "EffectOnce Demo")));
}

var Nav = {
  make: Index$Nav
};

function Index$App(Props) {
  var url = ReasonReactRouter.useUrl(undefined, /* () */0);
  var match = url[/* hash */1];
  switch (match) {
    case "/" :
        return React.createElement(Index$Nav, { });
    case "/constant" :
        return React.createElement(Constant$ReasonReactExamples.Demo.make, { });
    case "/constant-callback" :
        return React.createElement(ConstantCallback$ReasonReactExamples.Demo.make, { });
    case "/effect-once" :
        return React.createElement(EffectOnce$ReasonReactExamples.Demo.make, { });
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
