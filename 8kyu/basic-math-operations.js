// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number),
// value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples:

// basicOp('+', 4, 7)         // Output: 11
// basicOp('-', 15, 18)       // Output: -3
// basicOp('*', 5, 5)         // Output: 25
// basicOp('/', 49, 7)        // Output: 7

const basicOp = (operand, value1, value2) => {
  const matched = x => ({
    on: () => matched(x),
    otherwise: () => x,
  });
  const match = x => ({
    on: (predicate, fn) => (predicate(x) ? matched(fn(x)) : match(x)),
    otherwise: y => y,
  });
  return match(operand)
    .on(x => x === '+', () => value1 + value2)
    .on(x => x === '-', () => value1 - value2)
    .on(x => x === '*', () => value1 * value2)
    .on(x => x === '/', () => value1 / value2)
    .otherwise('Wrong operand!');
};

console.log(basicOp('+', 4, 7));
console.log(basicOp('-', 15, 18));
console.log(basicOp('*', 5, 5));
console.log(basicOp('/', 49, 7));
console.log(basicOp('9', 49, 7));
