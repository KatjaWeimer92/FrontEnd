const containerEle = document.getElementById("container");
const answerEle = document.getElementById("answer");

containerEle.addEventListener("submit", (event)=>{
    event.preventDefault();
    const name = event.target.name.value;
    console.log(name);
    loadGender(name);
})

async function loadGender(name){
    const res = await fetch(`https://api.genderize.io/?name=${name}`)
    const obj = await res.json()
    console.log(obj);
    const{firstName, gender,probability} = obj;
    console.log(firstName, gender);
    answerEle.textContent = `Name:${firstName} Gender:${gender} Probability;${probability}`
} 