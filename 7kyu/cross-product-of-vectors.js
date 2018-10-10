// Make a function called crossProduct that takes two 3 dimensional vectors (in the form of two
// arrays) and returns their cross product. You need to check if the passed arguments are of the
// expected format, otherwise throw the message: "Arguments are not 3D vectors!".

// crossProduct([1,0,0],[0,1,0]) //should return [0,0,1]
// crossProduct('gobbledigook', [1,1,1]) //should throw the string "Arguments are not 3D vectors!"
// Your function should handle non integers.

// More info on cross products: https://en.wikipedia.org/wiki/Cross_product

// crossprod([1,0,0], [0,1,0], 3, 3)         /* should return [0,0,1] */
// crossprod([1,2,3,4,5], [5,4,3,2,1], 5, 5) /* should return NULL */
// crossprod([6,6,6], NULL, 3, 3)            /* should return NULL */
// crossprod(NULL, NULL, 3, 3)               /* should return NULL */

const crossProduct = (a, b) => {
  const checkVector = v => Array.isArray(v) && v.length === 3 && v.every(x => !Number.isNaN(x));
  if (!checkVector(a) || !checkVector(b)) {
    throw 'Arguments are not 3D vectors!'; // eslint-disable-line
  }
  const [a0, a1, a2] = a;
  const [b0, b1, b2] = b;
  return [a1 * b2 - b1 * a2, a2 * b0 - b2 * a0, a0 * b1 - b0 * a1];
};

console.log(crossProduct([1, 0, 0], [0, 1, 0]));
