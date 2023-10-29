// Variáveis
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');

let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

// Eventos
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown', keyDown);

// Funções
function handleTryClick(event) {
   event.preventDefault();
   const inputNumber = document.querySelector('#inputNumber');

   if(inputNumber.value != ''){
      if(Number(inputNumber.value) >= 0 && Number(inputNumber.value) <= 10) {
          if (Number(inputNumber.value) === randomNumber) {
              toggleScreen();
              screen2.querySelector('h1').innerText = `Acertou em ${xAttempts} tentativas!`;
          }
      } else {
          alert('Informe somente valores entre 0 e 10 !!!');
      }
      inputNumber.value = '';
      xAttempts++;
  } else {
      alert('Campo em branco !!!');
  }
  
}

function handleResetClick() {
   toggleScreen();
   xAttempts = 1;
   randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
   screen1.classList.toggle('hide');
   screen2.classList.toggle('hide');
}

function keyDown(e) {
   if (e.key == 'Enter' && screen1.classList.contains('hide')) {
      handleResetClick();
   }
}