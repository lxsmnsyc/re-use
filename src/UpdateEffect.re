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
let use = (effect: unit => option(unit => unit)) => {
  let ref = Mutable.use(true);

  IsomorphicEffect.use(() => {
    if (ref^) {
      ref := true;

      None;
    } else {
      effect();
    }
  });
};

let use1 = (effect: unit => option(unit => unit), dependencies: array('a)) => {
  let ref = Mutable.use(true);

  IsomorphicEffect.use1(() => {
    if (ref^) {
      ref := true;

      None;
    } else {
      effect();
    }
  }, dependencies);
};

let use2 = (effect: unit => option(unit => unit), dependencies: ('a, 'b)) => {
  let ref = Mutable.use(true);

  IsomorphicEffect.use2(() => {
    if (ref^) {
      ref := true;

      None;
    } else {
      effect();
    }
  }, dependencies);
};

let use3 = (effect: unit => option(unit => unit), dependencies: ('a, 'b, 'c)) => {
  let ref = Mutable.use(true);

  IsomorphicEffect.use3(() => {
    if (ref^) {
      ref := true;

      None;
    } else {
      effect();
    }
  }, dependencies);
};

let use4 = (effect: unit => option(unit => unit), dependencies: ('a, 'b, 'c, 'd)) => {
  let ref = Mutable.use(true);

  IsomorphicEffect.use4(() => {
    if (ref^) {
      ref := true;

      None;
    } else {
      effect();
    }
  }, dependencies);
};

let use5 = (effect: unit => option(unit => unit), dependencies: ('a, 'b, 'c, 'd, 'e)) => {
  let ref = Mutable.use(true);

  IsomorphicEffect.use5(() => {
    if (ref^) {
      ref := true;

      None;
    } else {
      effect();
    }
  }, dependencies);
};

let use6 = (effect: unit => option(unit => unit), dependencies: ('a, 'b, 'c, 'd, 'e, 'f)) => {
  let ref = Mutable.use(true);

  IsomorphicEffect.use6(() => {
    if (ref^) {
      ref := true;

      None;
    } else {
      effect();
    }
  }, dependencies);
};

let use7 = (effect: unit => option(unit => unit), dependencies: ('a, 'b, 'c, 'd, 'e, 'f, 'g)) => {
  let ref = Mutable.use(true);

  IsomorphicEffect.use7(() => {
    if (ref^) {
      ref := true;

      None;
    } else {
      effect();
    }
  }, dependencies);
};