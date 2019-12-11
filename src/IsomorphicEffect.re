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
[@bs.module] external call
  : ([@bs.uncurry] (unit => option(unit => unit))) => unit
  = "./bindings/useIsomorphicEffect.js";
[@bs.module] external call1
  : ([@bs.uncurry] (unit => option(unit => unit))) => array('a) => unit
  = "./bindings/useIsomorphicEffect.js";
[@bs.module] external call2
  : ([@bs.uncurry] (unit => option(unit => unit)), ('a, 'b)) => unit
   = "./bindings/useIsomorphicEffect.js";
[@bs.module] external call3
  : ([@bs.uncurry] (unit => option(unit => unit)), ('a, 'b, 'c)) => unit
   = "./bindings/useIsomorphicEffect.js";
[@bs.module] external call4
  : ([@bs.uncurry] (unit => option(unit => unit)), ('a, 'b, 'c, 'd)) => unit
   = "./bindings/useIsomorphicEffect.js";
[@bs.module] external call5
  : ([@bs.uncurry] (unit => option(unit => unit)), ('a, 'b, 'c, 'd, 'e)) => unit
   = "./bindings/useIsomorphicEffect.js";
[@bs.module] external call6
  : ([@bs.uncurry] (unit => option(unit => unit)),  ('a, 'b, 'c, 'd, 'e, 'f)) => unit
   = "./bindings/useIsomorphicEffect.js";
[@bs.module] external call7
  : ([@bs.uncurry] (unit => option(unit => unit)), ('a, 'b, 'c, 'd, 'e, 'f, 'g)) => unit
   = "./bindings/useIsomorphicEffect.js";
