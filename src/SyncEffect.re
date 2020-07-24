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
let use = (effect: (unit => option(unit => unit))) => {
  let cleanup = MutableCleanup.use();

  React.useMemo(() => {
    switch (cleanup^) {
      | Some(fn) => fn();
      | None => ();
    }

    cleanup := effect();
  });
};

let use0 = (effect: (unit => option(unit => unit))) => {
  let cleanup = MutableCleanup.use();

  React.useMemo0(() => {
    switch (cleanup^) {
      | Some(fn) => fn();
      | None => ();
    }

    cleanup := effect();
  });
};

let use1 = (effect: (unit => option(unit => unit)), deps: array('a)) => {
  let cleanup = MutableCleanup.use();

  React.useMemo1(() => {
    switch (cleanup^) {
      | Some(fn) => fn();
      | None => ();
    }

    cleanup := effect();
  }, deps);
};

let use2 = (effect: (unit => option(unit => unit)), deps: ('a, 'b)) => {
  let cleanup = MutableCleanup.use();

  React.useMemo2(() => {
    switch (cleanup^) {
      | Some(fn) => fn();
      | None => ();
    }

    cleanup := effect();
  }, deps);
};

let use3 = (effect: (unit => option(unit => unit)), deps: ('a, 'b, 'c)) => {
  let cleanup = MutableCleanup.use();

  React.useMemo3(() => {
    switch (cleanup^) {
      | Some(fn) => fn();
      | None => ();
    }

    cleanup := effect();
  }, deps);
};

let use4 = (effect: (unit => option(unit => unit)), deps: ('a, 'b, 'c, 'd)) => {
  let cleanup = MutableCleanup.use();

  React.useMemo4(() => {
    switch (cleanup^) {
      | Some(fn) => fn();
      | None => ();
    }

    cleanup := effect();
  }, deps);
};

let use5 = (effect: (unit => option(unit => unit)), deps: ('a, 'b, 'c, 'd, 'e)) => {
  let cleanup = MutableCleanup.use();

  React.useMemo5(() => {
    switch (cleanup^) {
      | Some(fn) => fn();
      | None => ();
    }

    cleanup := effect();
  }, deps);
};

let use6 = (effect: (unit => option(unit => unit)), deps: ('a, 'b, 'c, 'd, 'e, 'f)) => {
  let cleanup = MutableCleanup.use();

  React.useMemo6(() => {
    switch (cleanup^) {
      | Some(fn) => fn();
      | None => ();
    }

    cleanup := effect();
  }, deps);
};


[@bs.module "react"] external useMemo7
  : ([@bs.uncurry] (unit => 'h), ('a, 'b, 'c, 'd, 'e, 'f, 'g)) => unit
   = "useMemo";

let use7 = (effect: (unit => option(unit => unit)), deps: ('a, 'b, 'c, 'd, 'e, 'f, 'g)) => {
  let cleanup = MutableCleanup.use();

  useMemo7(() => {
    switch (cleanup^) {
      | Some(fn) => fn();
      | None => ();
    }

    cleanup := effect();
  }, deps);
};