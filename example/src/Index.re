
module Nav {
  [@react.component]
  let make = () =>
    <ul>
      <li><a href="/#/constant">{ ReasonReact.string("Constant Demo") }</a></li>
      <li><a href="/#/constant-callback">{ ReasonReact.string("ConstantCallback Demo") }</a></li>
      <li><a href="/#/effect-once">{ ReasonReact.string("EffectOnce Demo") }</a></li>
    </ul>
}

module App {
  [@react.component]
  let make = () => {
    let url = ReasonReactRouter.useUrl();

    switch (url.hash) {
      | "/constant" => <Constant.Demo />
      | "/constant-callback" => <ConstantCallback.Demo />
      | "/effect-once" => <EffectOnce.Demo />
      | "/" => <Nav />
      | _ => <Nav />
    }
  }
}

ReactDOMRe.renderToElementWithId(<App />, "app");