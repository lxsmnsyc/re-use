[@bs.module] external random: unit => float = "./bindings/random.js";

module Demo {
  [@react.component]
  let make = () => {
    let (state, setState) = React.useState(() => false);
    let ref = React.useRef(None);
  
    let callback = ReUse.ConstantCallback.call(() => random());


    React.Ref.setCurrent(ref, Some(callback));
  
    <React.Fragment>
      {
        switch (React.Ref.current(ref)) {
          | Some(cb) =>
            <h1>
              { ReasonReact.string("Changed? " ++ string_of_bool(cb != callback)) }
            </h1>
          | None => ReasonReact.null
        }
      }
      <button onClick={_ => setState(_ => !state)}>
        { ReasonReact.string("Force Render") }
      </button>
    </React.Fragment>
  };
}
