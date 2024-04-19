const fruits = ["apple","orange","mango"];
const fruits2 = fruits;
fruits[0] = "banana";
console.log(fruits);
console.log(fruits2);

let str1 = "hello";
let str2 = str1;
str1 = "Goodbye";
console.log(str1);
console.log(str2);

const cars = ["BMW","Mercedes","Audi"];
//spread оператр состоит из ...
const carsCopy = [...cars];
carsCopy[0] = "Opel";
console.log(cars);
console.log(carsCopy);

const citiest1 = ["Berlin", "Paris"];
const citiest2 = ["London", "Budapest"];
const joinedCities = [...citiest1, ...citiest2];
console.log(joinedCities);

const vegitables = ['cucumber','tomato'];
const newVegitables = [...vegitables, "carrot"];
console.log(newVegitables);

const animals = ["dog", "cat"];
const newAnimals = [...animals, "cow"];
console.log(newAnimals);

const animals1 = ["dog", "cat"];
const animalsCopy = [...animals1];
console.log(animalsCopy);