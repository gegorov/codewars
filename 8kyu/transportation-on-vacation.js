const rentalCarCost = (days) => {
  const matched = x => ({
    case: () => matched(x),
    default: () => x,
  });
  const match = x => ({
    case: (predicate, fn) => (predicate(x) ? matched(fn(x)) : match(x)),
    default: value => value,
  });
  return match(days)
    .case(d => d > 0 && d < 3, () => days * 40)
    .case(d => d >= 3 && d < 7, () => days * 40 - 20)
    .case(d => d >= 7, () => days * 40 - 50)
    .default('Days should be > 0');
};

console.log(rentalCarCost(2));
console.log(rentalCarCost(5));
console.log(rentalCarCost(9));
