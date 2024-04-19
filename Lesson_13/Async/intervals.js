const tick = setInterval(()=>{
    console.log('tick');
},5000); // будет выполняться каждые 5 секунд

const interval = setInterval(()=>{
    console.log('interval');
})

function getSeven(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve(7)
        },4000)
    })
}
const promise = getSeven();
console.log(promise)

// функция принимать имя пользователя -
// если имя John - вернет resolved
// если имя другое - вернет rejected

function getAgeOfUserByName(name){
    return new Promise(function(resolve,reject){
        if (name==="John"){
            setInterval(()=>{
                resolve(20)
            },3000)
        }else{
            setInterval(()=>{
                reject(new Error("Нет такого имени"))
            },3000)
        }
    })
}
getAgeOfUserByName('John')
.then((data)=>console.log(data))
.catch((e)=>console.log(e))


getAgeOfUserByName('Tom')
.then((data)=>console.log(data))
.catch((e)=>console.log(e))

// Создать два интервала и добавить разное время
// Создать две функции таймаута