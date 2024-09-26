// filter  kiso ta map and foreach er moto  but filter  condition ways kaj kore

const numbers = [234, 456, 65, 3, 7, 38, 31, 50, 123, 100];

const centurisUp = numbers.filter(n => n > 100);
console.log(centurisUp);

const only100 = numbers.filter(n => n === 100);
console.log(only100);

const nums = [1, 2, 3, 4, 5];
let output = nums.filter(n => n % 2);
console.log(output);

// extra condition another condition
if (numbers.filter(n => n === 100)) {
  console.log('yes hundred  ase ');
} else {
  console.log('na akhne hundred nai ');
}
