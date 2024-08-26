const catFactsElement = document.getElementById("cat-facts")

//Функцию обертка 
async function loadCatFact(){
    const responce = await fetch("https://catfact.ninja/fact")
    const obj = await responce.json();
    console.log(obj);
    const {fact, length}=obj;
    catFactsElement.textContent= `${fact} ${length}`;
}
loadCatFact()