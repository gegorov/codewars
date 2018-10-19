// This time we want to write calculations using functions and get the results. Let's have a look
// at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times,
// dividedBy (divided_by in Ruby)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right
// operand
// Divison should be integer division, e.g eight(dividedBy(three()))/eight(divided_by(three)) should
// return 2, not 2.666666...

const helper = (number, operation) => (!operation ? number : operation(number));

const zero = operation => helper(0, operation);
const one = operation => helper(1, operation);
const two = operation => helper(2, operation);
const three = operation => helper(3, operation);
const four = operation => helper(4, operation);
const five = operation => helper(5, operation);
const six = operation => helper(6, operation);
const seven = operation => helper(7, operation);
const eight = operation => helper(8, operation);
const nine = operation => helper(9, operation);

const plus = a => b => a + b;
const minus = a => b => b - a;
const times = a => b => a * b;
const dividedBy = a => b => Math.floor(b / a);

console.log(two(plus(one())));
console.log(five(times(three())));
console.log(four(minus(three())));
console.log(seven(dividedBy(three())));
console.log(six(plus(zero())));
console.log(eight(times(nine())));
