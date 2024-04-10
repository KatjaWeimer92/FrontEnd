// мы можем создать элементы с нуля и прекрипить к документу html
//cоздадим пустой параграф

const newElement = document.createElement("p");

newElement.textContent = "Я был создан при помощи JS";

newElement.style.border = "4px solid red";

document.body.append(newElement);
// прикрепили элемент к документу

const targetElement = document.getElementById("target-element");

const newBtn = document.createElement("button");
newBtn.type="button";
newBtn.textContent="Нажми на меня";
targetElement.append(newBtn);
//