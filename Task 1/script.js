/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const form = document.querySelector('form');
const input = document.querySelector('#search');
const output = document.querySelector('#output');

function convertWeight(event) {
  event.preventDefault();
  let kg = input.value;
  let lb = kg * 2.2046;
  let g = kg / 0.001;
  let oz = kg * 35.274;
  output.innerHTML = `kg to lb = ${lb} lb <br> kg to g = ${g} g <br> kg to oz = ${oz} oz`;
  input.value = '';
}

form.addEventListener('submit', convertWeight);
