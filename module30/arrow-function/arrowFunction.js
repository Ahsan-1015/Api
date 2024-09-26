// normal function

function add1(num1, num2) {
  return num1 + num2;
}

console.log(add1(10, 15));

// function expression
const add2 = function (num1, num2) {
  return num1 + num2;
};

console.log(add2(20, 30));

// arrow function
const add3 = (num1, num2) => num1 + num2;
console.log(add3(50, 50));

// all function apply this with default apply
const add4 = (a = 0, b = 20) => a + b;

console.log(add4(add1(10, 15), add2(20, 50)));
console.log(add4(add1(10, 15)));
