[@bs.module] external random: unit => float = "./bindings/random.js";

module Demo {
  [@react.component]
  let make = () => {
    let (state, setState) = React.useState(() => false);
  
    let constant = ReUse.Constant.call(() => random());
  
  
    <button onClick={_ => setState(_ => !state)}>
      { ReasonReact.string(Js.Float.toString(constant)) }
    </button>
  };
}
