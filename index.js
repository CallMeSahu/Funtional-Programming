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

//Array.reduce()
const numbers = [1, 3, 5 , 2, 22, 11, 9]
const oddSum = (sum, num) => num%2 === 0? sum : sum + num;
const arr4 = numbers.reduce(oddSum, 0);
console.log(arr4);

const reduceObj = (oddEvenObj, num) => num%2 === 0? {...oddEvenObj, even: oddEvenObj.even+num} : {...oddEvenObj, odd: oddEvenObj.odd+num};
const oddEvenObj = {odd: 0, even: 0}
const sumObj = numbers.reduce(reduceObj, oddEvenObj);
console.log(sumObj)

//Currying
const giveYourName = (name) => msg => console.log(`${name} says, ${msg}`);
giveYourName("Siddhartha")("you are awesome!");

//Composition
const logWithName = msg => `Siddhartha says, ${msg}`;
const logWithID = msg => `ID: 163608 :: ${msg}`
const logWithIDAndName = msg => logWithID(logWithName(msg));

console.log(logWithIDAndName("you are awesome!"));