const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];

//Задание 1
const newCars = cars.map((car)=>{
    return{brand:car.brand, isDiesel:car.isDiesel}
});
console.log(newCars);

//Задание2
const DieselCars = cars.filter((car)=>car.isDiesel);
console.log(DieselCars);

//Задание 3
const nonDieselCars = cars.filter((car)=>!car.isDiesel);
console.log(nonDieselCars);

//Задание 4
const sum = cars
.filter((car)=>!car.isDiesel)
.map((car)=>car.price)
.reduce((acc, price)=>acc+price,0)
console.log(sum);  //47000

//Задание 5
cars.forEach((car)=>car.price *= 1.2)
console.log(cars);

//Задание 6
const cars2  = cars.map((car)=>{
    if(car.isDiesel){
        return{brand:"Tesla", price:25000, isDiesel:false}
    }
    return car
});
console.log(cars2);

const cars3 = cars.map((car)=>
car.isDiesel?{brand:"Tesla", price:25000, isDiesel:false}:car)
console.log(cars3);