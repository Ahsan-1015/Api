// normal function way te
const numbers = [34, 56, 35, 7, 58, 632];

function doubleIt(num) {
  return num * 2;
}

const result = numbers.map(doubleIt);
console.log(result);

//arrow function way te
const tripleIt = number => number * 3;

console.log(numbers.map(tripleIt));

// and another way  special in one line

const addSix = numbers.map(num => num + 6);
console.log(addSix);

console.log(numbers.map(n => n - 10));

// cube
const cube = x => x * x * x;
console.log(cube(2));

// another example
const friends = ['rakib', 'raihan ', 'hridoy', 'mahi'];
const nameLength = friends.map(frnd => frnd.length);
console.log(nameLength);
// output : [5, 7, 6, 4];

const nameFirstLetter = friends.map(first => first[0]);
console.log(nameFirstLetter);
