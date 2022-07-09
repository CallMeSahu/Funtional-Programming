//Immutability
const siddhartha = {name: "sunita", age: 21};
const shreya = {...siddhartha, age: siddhartha.age - 5};

console.log(siddhartha);
console.log(shreya);

const fiveColors = ["red", "blue", "yellow", "green", "violet"];
const sevenColors = [...fiveColors, "indigo", "orange"];

console.log(fiveColors);
console.log(sevenColors);

//Pure Functions
const sahu = {...siddhartha, name: "siddhartha"};

const birthday = (person) => ({...person, age: person.age+1})

console.log(birthday(sahu));
console.log(sahu);

//Higher Order Functions
const isLessThan10 = (number) => number<10;
const arr1 = [3, 6, 9, 12, 15, 18];
const arr2 = arr1.filter(isLessThan10);
console.log(arr2);

const incrementByTwo = (num) => num+2;
arr3 = arr2.map(incrementByTwo); 
console.log(arr3);
