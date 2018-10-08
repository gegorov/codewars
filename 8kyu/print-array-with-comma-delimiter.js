// nput: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

const printArray = array => array.join();
// const printArray = array => array.reduce((acc, el) => acc.concat(',', el), '');

console.log(printArray(['h', 'o', 'l', 'a']));
