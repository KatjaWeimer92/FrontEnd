const brothers = [
    {race:"hobbit", height:110 , age:45 , name: "Frodo Baggins"},
    {race:"human", height:185 , age:46 , name: "Aragorn"},
    {race:"elf", height:189 , age:110 , name: "Legolas"},
    {race:"dworf", height:140 , age:150 , name: "Gimly"},
    {race:"human", height:195 , age:200 , name: "Gandalf"},
]
//Метод МАР возвращает новый массив, 
//созданный путем применения функции к каждому элементу исходного массива
// этот метод не изменяет исходный массив

//Пример 1
const names = brothers.map((element)=>element.name);
console.log(names);

//Пример 2
//слова element / brother -  это всего лишь имя переменной (может быть любым)
//удобно выбирать слово в единственном числе,
//пример массив cars  - переменную в колбеке назвать сar
const ages = brothers.map((brother)=>brother.age);
console.log(ages);

//Пример 3
const racesNames = brothers.map((brother)=>brother.race + " " + brother.name);
console.log(racesNames);

//Пример 4
// высокий - выше или равно 170
//маленький ниже 170
//массив из слов [маленький, высокий, маленький, высокий]
const sizes = brothers.map((brother)=>{
    if(brother.height>=170){
        return "высокий";
    }
    return "маленький";
});
console.log(sizes);

const sizesVer2 = brothers.map((brother)=>brother.height >=170 ? "высокий": "маленький");
console.log(sizesVer2);


//Метод forEach - для изменения исходного массива

//Пример 1
//Состарим всех героев на 1 год
brothers.forEach((brother)=>brother.age+=1);
console.log(brothers);

//Пример 2
//Переведем все имена в верхний регистр
brothers.forEach((brother)=>brother.name = brother.name.toUpperCase());
console.log(brothers);

// 3 Метод reduce
// с помощью цикла for
let sum = 0;
for (let i = 0; i<ages.length; i++){
    sum +=ages[i];
}
console.log(sum); //551

//с помощью reduce
const sum2 = ages.reduce((acc, current)=>acc+current,0);
// iteration -- acc -- current 
  // 1         -- 0   -- 45
  // 2         -- 45  -- 46
  // 3         -- 91  -- 110
  // 4         -- 201 -- 150
  // 5         -- 351 -- 200

// Аккумулятор (accumulator) - значение,
  // которое накапливает результат применения функции.
 // Текущий элемент массива (currentValue).
 // Текущий индекс (currentIndex) элемента в массиве.
 // Сам массив (array), к которому применяется метод reduce.
 // Функция callback должна возвращать новое значение аккумулятора
 // после обработки текущего элемента.

 // initialValue (необязательный): Начальное значение аккумулятора.
 // Если это значение указано,
 //  то оно будет использовано в качестве начального значения аккумулятора
 // при первом вызове функции callback.
 // Если initialValue не указан, то первый элемент массива станет
 // начальным значением аккумулятора.

 const totalHeight = brothers.reduce((acc, brother)=>acc+brother.height,0);
 console.log(totalHeight); //819

 //можно сделать цепочку
 const totalHeight2 = brothers
 .map((brother)=>brother.height) //получили массив ростов
 .reduce((acc, height)=>acc +height,0);
 console.log(totalHeight2);

 //Хотим объеденить все имена через пробед
 const nameStr = brothers
 .map((brother)=>brother.name) //получили массив имен
 .reduce((acc, name)=>acc + name +" ", " ");
 console.log(nameStr);

 // .trim - убирает пробелы
 console.log(nameStr.trim());

 //Метод split разделяет строку на массив
 const str = "Frodo Baggins, Aragorn, Legolas, Gimly, Gandalf";
 const namesArr = str.split(", ");
 console.log(namesArr);

 //Метод join
 const newString =namesArr.join("!");
 console.log(newString);

 //Метод find - возвращает первое совпадение с заданным условием
 const person = brothers.find((brother)=>brother.race ==="human");
 console.log(person);
 const person2 =brothers.find((brother)=>brother.name === "GANDALF");
 console.log(person2);

// Метод filter
// Возвращает все элементы удовлетворяющие условию
// не мутирующий массив (не изменяет исходный массив)
// Выбрать тех кто старше 100 лет
const person3 =brothers.filter((brother)=>brother.race === "human");
 console.log(person3);

 const oldBrothers = brothers.filter((brother)=>brother.age>100);
 console.log(oldBrothers);

 const oldNonHumans =brothers
 .filter((brother)=>brother.age>100 && brother.race !=="human");
 console.log(oldNonHumans);
