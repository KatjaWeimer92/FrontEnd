const paragraphElement = document.getElementById("text");
const changeButtonElement = document.getElementById("btn-change");
const flowerElement = document.getElementById("flowers");
const changeFlowerButtonElement = document.getElementById("btn-change-flower");
const surikatElement = document.getElementById("Surikat");
const addSurikatButtonElement = document.getElementById("add-surikat");
//мы можем назначить обработчик событий
// при нажатии на кнопку мы будем менять цвет фона параграфа на синий
changeButtonElement.addEventListener("click",()=>{
    paragraphElement.style.backgroundColor="blue"
});

//Поменяем текст внутри
changeFlowerButtonElement.addEventListener('click',()=>{
    flowerElement.textContent="Ягодки"
});

addSurikatButtonElement.addEventListener("click",()=>{
    surikatElement.src ="https://yt3.ggpht.com/a/AGF-l78_OCoXkRxFMIABLatoe_Ln-jG0pHiDUnLE1A=s900-c-k-c0xffffffff-no-rj-mo"
});
surikatElement.style.width = "300px";
//