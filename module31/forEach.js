// for each similar to map
// for each  result return kore na  and map result return kore dei

const numbers = [34, 6, 7, 8, 3, 45, 89, 36];

const adding100 = numbers.forEach(n => n + 100);
console.log(adding100);
// output is undefined

//  using map
const adding500 = numbers.map(n => n + 500);
console.log(adding500);
