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

let use: unit => (Js.Promise.t('r) => Js.Promise.t('r));
let use0: unit => (Js.Promise.t('r) => Js.Promise.t('r));
let use1: array('a) => (Js.Promise.t('r) => Js.Promise.t('r));
let use2: (('a, 'b)) => (Js.Promise.t('r) => Js.Promise.t('r));
let use3: (('a, 'b, 'c)) => (Js.Promise.t('r) => Js.Promise.t('r));
let use4: (('a, 'b, 'c, 'd)) => (Js.Promise.t('r) => Js.Promise.t('r));
let use5: (('a, 'b, 'c, 'd, 'e)) => (Js.Promise.t('r) => Js.Promise.t('r));
let use6: (('a, 'b, 'c, 'd, 'e, 'f)) => (Js.Promise.t('r) => Js.Promise.t('r));
let use7: (('a, 'b, 'c, 'd, 'e, 'f, 'g)) => (Js.Promise.t('r) => Js.Promise.t('r));