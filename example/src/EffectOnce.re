
module Mountable {
  [@react.component]
  let make = (~flag) => {
    ReUse.EffectOnce.call(() => {
      Js.log("Mounted!");

      Some(() => {
        Js.log("Unmounted!")
      })
    });

    Js.log("Re-rendered");

    <React.Fragment>
      <h1>{ ReasonReact.string("Mounted") }</h1>
    </React.Fragment>
  }
}

module Demo {
  [@react.component]
  let make = () => {
    let (state, setState) = React.useState(() => false);
    let (flag, toggle) = React.useState(() => false);

    <React.Fragment>
      { state ? <Mountable flag /> : ReasonReact.null}
      <button onClick={_ => setState(_ => !state)}>
        { ReasonReact.string(state ? "Show" : "Hide") }
      </button>
      <button onClick={_ => toggle(_ => !state)}>
        { ReasonReact.string("Force Render") }
      </button>
    </React.Fragment>
  };
}
