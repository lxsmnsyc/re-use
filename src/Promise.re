/**
 * @license
 * MIT License
 *
 * Copyright (c) 2019 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2019
 */
let use = () => {
  let mounted: ref(bool) = Mutable.use(false);

  IsomorphicEffect.use(() => {
    mounted := true;
    Some(() => {
      mounted := false;
    });
  });

  React.useCallback((promise: Js.Promise.t('r)) => {
    Js.Promise.make((~resolve, ~reject) => {
      ignore(
        promise
          |> Js.Promise.then_((value) => {
            if (mounted^) {
              resolve(. value);
            }
            Js.Promise.resolve(value);
          })
          |> Js.Promise.catch((error) => {
            if (mounted^) {
              reject(. Obj.magic(error));
            }
            Js.Promise.reject(Obj.magic(error));
          })
      );
    });
  });
};

let use0 = () => {
  let mounted: ref(bool) = Mutable.use(false);

  IsomorphicEffect.use0(() => {
    mounted := true;
    Some(() => {
      mounted := false;
    });
  });

  React.useCallback0((promise: Js.Promise.t('r)) => {
    Js.Promise.make((~resolve, ~reject) => {
      ignore(
        promise
          |> Js.Promise.then_((value) => {
            if (mounted^) {
              resolve(. value);
            }
            Js.Promise.resolve(value);
          })
          |> Js.Promise.catch((error) => {
            if (mounted^) {
              reject(. Obj.magic(error));
            }
            Js.Promise.reject(Obj.magic(error));
          })
      );
    });
  });
};

let use1 = (deps: array('a)) => {
  let mounted: ref(bool) = Mutable.use(false);

  IsomorphicEffect.use1(() => {
    mounted := true;
    Some(() => {
      mounted := false;
    });
  }, deps);

  React.useCallback1((promise: Js.Promise.t('r)) => {
    Js.Promise.make((~resolve, ~reject) => {
      ignore(
        promise
          |> Js.Promise.then_((value) => {
            if (mounted^) {
              resolve(. value);
            }
            Js.Promise.resolve(value);
          })
          |> Js.Promise.catch((error) => {
            if (mounted^) {
              reject(. Obj.magic(error));
            }
            Js.Promise.reject(Obj.magic(error));
          })
      );
    });
  }, deps);
};

let use2 = (deps: ('a, 'b)) => {
  let mounted: ref(bool) = Mutable.use(false);

  IsomorphicEffect.use2(() => {
    mounted := true;
    Some(() => {
      mounted := false;
    });
  }, deps);

  React.useCallback2((promise: Js.Promise.t('r)) => {
    Js.Promise.make((~resolve, ~reject) => {
      ignore(
        promise
          |> Js.Promise.then_((value) => {
            if (mounted^) {
              resolve(. value);
            }
            Js.Promise.resolve(value);
          })
          |> Js.Promise.catch((error) => {
            if (mounted^) {
              reject(. Obj.magic(error));
            }
            Js.Promise.reject(Obj.magic(error));
          })
      );
    });
  }, deps);
};

let use3 = (deps: ('a, 'b, 'c)) => {
  let mounted: ref(bool) = Mutable.use(false);

  IsomorphicEffect.use3(() => {
    mounted := true;
    Some(() => {
      mounted := false;
    });
  }, deps);

  React.useCallback3((promise: Js.Promise.t('r)) => {
    Js.Promise.make((~resolve, ~reject) => {
      ignore(
        promise
          |> Js.Promise.then_((value) => {
            if (mounted^) {
              resolve(. value);
            }
            Js.Promise.resolve(value);
          })
          |> Js.Promise.catch((error) => {
            if (mounted^) {
              reject(. Obj.magic(error));
            }
            Js.Promise.reject(Obj.magic(error));
          })
      );
    });
  }, deps);
};

/**
 * Polyfills, since the current reason-react does not yet include
 * these
 */
[@bs.module "react"]
external useCallback4
  : ([@bs.uncurry] ('input => 'output), ('a, 'b, 'c, 'd)) => React.callback('input, 'output)
  = "useCallback";

[@bs.module "react"]
external useCallback5
  : ([@bs.uncurry] ('input => 'output), ('a, 'b, 'c, 'd, 'e)) => React.callback('input, 'output)
   = "useCallback";

[@bs.module "react"]
external useCallback6
  : ([@bs.uncurry] ('input => 'output), ('a, 'b, 'c, 'd, 'e, 'f)) => React.callback('input, 'output)
   = "useCallback";

[@bs.module "react"]
external useCallback7
  : ([@bs.uncurry] ('input => 'output), ('a, 'b, 'c, 'd, 'e, 'f, 'g)) => React.callback('input, 'output)
   = "useCallback";

let use4 = (deps: ('a, 'b, 'c, 'd)) => {
  let mounted: ref(bool) = Mutable.use(false);

  IsomorphicEffect.use4(() => {
    mounted := true;
    Some(() => {
      mounted := false;
    });
  }, deps);

  useCallback4((promise: Js.Promise.t('r)) => {
    Js.Promise.make((~resolve, ~reject) => {
      ignore(
        promise
          |> Js.Promise.then_((value) => {
            if (mounted^) {
              resolve(. value);
            }
            Js.Promise.resolve(value);
          })
          |> Js.Promise.catch((error) => {
            if (mounted^) {
              reject(. Obj.magic(error));
            }
            Js.Promise.reject(Obj.magic(error));
          })
      );
    });
  }, deps);
};

let use5 = (deps: ('a, 'b, 'c, 'd, 'e)) => {
  let mounted: ref(bool) = Mutable.use(false);

  IsomorphicEffect.use5(() => {
    mounted := true;
    Some(() => {
      mounted := false;
    });
  }, deps);

  useCallback5((promise: Js.Promise.t('r)) => {
    Js.Promise.make((~resolve, ~reject) => {
      ignore(
        promise
          |> Js.Promise.then_((value) => {
            if (mounted^) {
              resolve(. value);
            }
            Js.Promise.resolve(value);
          })
          |> Js.Promise.catch((error) => {
            if (mounted^) {
              reject(. Obj.magic(error));
            }
            Js.Promise.reject(Obj.magic(error));
          })
      );
    });
  }, deps);
};

let use6 = (deps: ('a, 'b, 'c, 'd, 'e, 'f)) => {
  let mounted: ref(bool) = Mutable.use(false);

  IsomorphicEffect.use6(() => {
    mounted := true;
    Some(() => {
      mounted := false;
    });
  }, deps);

  useCallback6((promise: Js.Promise.t('r)) => {
    Js.Promise.make((~resolve, ~reject) => {
      ignore(
        promise
          |> Js.Promise.then_((value) => {
            if (mounted^) {
              resolve(. value);
            }
            Js.Promise.resolve(value);
          })
          |> Js.Promise.catch((error) => {
            if (mounted^) {
              reject(. Obj.magic(error));
            }
            Js.Promise.reject(Obj.magic(error));
          })
      );
    });
  }, deps);
};

let use7 = (deps: ('a, 'b, 'c, 'd, 'e, 'f, 'g)) => {
  let mounted: ref(bool) = Mutable.use(false);

  IsomorphicEffect.use7(() => {
    mounted := true;
    Some(() => {
      mounted := false;
    });
  }, deps);

  useCallback7((promise: Js.Promise.t('r)) => {
    Js.Promise.make((~resolve, ~reject) => {
      ignore(
        promise
          |> Js.Promise.then_((value) => {
            if (mounted^) {
              resolve(. value);
            }
            Js.Promise.resolve(value);
          })
          |> Js.Promise.catch((error) => {
            if (mounted^) {
              reject(. Obj.magic(error));
            }
            Js.Promise.reject(Obj.magic(error));
          })
      );
    });
  }, deps);
};