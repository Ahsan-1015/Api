const myComputer = {
  name: ' Desktop ',
  processor: 'Amd rayzen 5 5600g',
  ram: '16gb',
  ssd: '256gb',
  hdd: '1 tb',
  monitor: 'hp m22f',
  casing: 'Deepcool',
};

// all property keys gula paoa
const keys = Object.keys(myComputer);

// all property values gula paoa
const values = Object.values(myComputer);

// all property aksathe paoa
const entries = Object.entries(myComputer);

// console.log(keys);
// console.log(values);

// console.log(...entries);

// delete kora
delete myComputer.casing;
console.log(entries);

// advanced freze , seal-------

Object.freeze(myComputer);

Object.seal(myComputer);
