// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";

btn.addEventListener('click', ()=> {
  var clonedBtn=document.createElement('button');
  clonedBtn.id='clonedBtn';
  clonedBtn.textContent='Я изменю тебя';
  document.body.appendChild(clonedBtn);

  clonedBtn.style.backgroundColor='#a78b71';
  clonedBtn.style.color='white'
  // работайте с clonedBtn
  // ваш код начинается здесь
btn.style.backgroundColor = '#9c4a1a';
btn.style.color = 'black';
  
}, {once: true});
//

// здесь можете создать EventListener для второй кнопки