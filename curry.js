/**
 * 2018-11-23
 * @copyright LinWei
 * @description Implement curry.
 * @see [`_.curry`](https://lodash.com/docs/4.17.11#curry).
 * @param {Function} fn The function to curry.
 * @return {Function} Return curried function.
 * @example
 *
 * var foo = function(a, b, c, d) {
 *   return [a, b, c, d];
 * };
 *
 * var curried = curry(foo);
 *
 * curried(1, 2, 3, 4);
 * // => [1, 2, 3, 4]
 *
 * curried(1, 2, 3)(4);
 * // => [1, 2, 3, 4]
 *
 * curried(1, 2)(3)(4);
 * // => [1, 2, 3, 4]
 *
 * curried(1)(2)(3)(4)
 * // => [1, 2, 3, 4]
 */

function curry(fn) {
  var length = fn.length,
      array = [];

  if (typeof fn !== 'function') {
    throw {
      message: 'Not function.'
    };
  }    

  return function() {
    var argsLength = arguments.length,
        remain = Array.from(arguments);

    array = array.concat(remain);
    if ((length -= argsLength) > 0) {
      return arguments.callee;
    }

    var result = fn.apply(null, array);

    length = fn.length;
    array = [];

    return result;
  };
}