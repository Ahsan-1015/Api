// reduce multi parmeter pass kora lage

const array = [23, 6, 57, 3, 8, , 49, 38, 6, 98, 3];

const arraySum = array.reduce((p, c) => p + c, 0);
console.log(arraySum);

// optional
const arrayMinus = array.reduce((p, c) => p - c, 0);
console.log(arrayMinus);
const arrayMult = array.reduce((previos, current) => previos * current, 0);
console.log(arrayMult);
