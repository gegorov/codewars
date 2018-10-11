// We want to create a function, which returns an array of functions, which return their index in
// the array. For better understanding, here an example:

// var callbacks = createFunctions(5); // create an array, containing 5 functions

// callbacks[0](); // must return 0
// callbacks[3](); // must return 3
// We already implemented that function, but when we actually run the code, the result doesn't look
// like what we expected. Can you spot, what's wrong with it? A test fixture is also available


// function createFunctions(size) {
//   return new Array(size).fill(function () { return this.indexOf(this); });
// }

function createFunctions(n) {
  const callbacks = [];
  const getIndex = index => index;

  for (let i = 0; i < n; i += 1) {
    callbacks.push(() => getIndex(i));
  }
  return callbacks;
}


const callbacks = createFunctions(5);

console.log(callbacks[0]());
console.log(callbacks[1]());
console.log(callbacks[2]());
console.log(callbacks[3]());
console.log(callbacks[4]());
