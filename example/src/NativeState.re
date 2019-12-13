
module Demo {
  [@react.component]
  let make = () => {
    let (state, setState) = ReUse.NativeState.call(() => false);
  
    <button onClick={_ => setState(_ => !state)}>
      { ReasonReact.string(state ? "True" : "False") }
    </button>
  };
}
