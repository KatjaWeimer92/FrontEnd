//асинхронный код / синхронный код

/*console.log('apple')  //синхронный код

setTimeout(()=>{
    console.log("banana2");  //асинхронный код
},5000);
console.log("banana1");

// JS - однопоточныфй язык программирования
function getSix(){
    setTimeout(()=>{
        return 6
    },4000)
}
let x =getSix();
console.log(x);*/

function printClap(){
    console.log('clap');
}

function printBravo(){
    console.log('bravo');
}

function clapHands(){
    setTimeout(printClap,2000);
    setTimeout(printBravo,6000)
}
clapHands()