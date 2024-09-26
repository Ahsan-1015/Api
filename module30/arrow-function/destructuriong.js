const student = {
  name: 'Ahsan habib',
  age: 21,
  phone: '01754678436',
  gender: 'male',
  study: 'City University',
  dept: 'BSc in CSE',
};
console.log(student.name);

// now destructuring

const { study } = student;
console.log(study);

// call multiple
const { phone, age, dept } = student;

console.log(phone);
console.log('age :' + age);
console.log(dept);

// change gender to lingho property
const { gender: lingo } = student;
console.log(lingo);

// destructuring in array------
// jei man ta left side a dimo seta sei array er right side er variable er name hoiye jabe
const number = [23, 56, 6, 764, 646, 45];

// console.log(...number);

const [num1, num2] = number;

console.log(Math.max(...number));
console.log(num1);
console.log(num2);

// using function

function numbers() {
  return [3, 565, 65, 7, 53, 7, 4];
}

const [num3, num4, num5, num6] = numbers();
console.log(num3, num4, num5, num6);
