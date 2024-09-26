const getAge = person => person.age;
const university = person => person.university;
const studentName = person => person.name;

const student = {
  name: 'Ahsan habib',
  age: 21,
  gender: 'male',
  dept: 'CSE',
  university: 'City University',
};
const age = getAge(student);
console.log(age);
console.log(university(student));
console.log(studentName(student));

// array tips
const getThird = number => number[2];
const number = [2, 5, 3, 6, 6, 3, 7];

console.log(getThird(number));

// no parameter
const piShow = pi => Math.PI;
console.log(piShow());

// do math
const doMath = (x, y, z) => {
  const sum = x + y + z;
  const mult = x * y * z;
  const result = sum - mult;
  return result;
};

console.log(doMath(3, 6, 7));
