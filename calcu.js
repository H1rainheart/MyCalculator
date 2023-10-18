/*
const numerator = Math.floor(Math.random()*100);
const denomenator = Math.floor(Math.random()*100); 

console.log(numerator);
console.log(denomenator);

let sum = numerator + denomenator;
let difference = numerator - denomenator;
let product = numerator * denomenator;
let quotient = numerator / denomenator;

let clearData = '';

const operator = Math.floor(Math.random()*4);

switch(operator){
  case 1:
    console.log('You pick addition and the sum is: '+sum);
    break;
    case 2:
      console.log('You pick subtraction and the difference is: '+difference);
      break;
      case 3:
        console.log('You pick multiplication and the product is: '+product);
        break;
          case 4:
            console.log('You pick division and the quotient is: '+quotient);
              break;  
              default:
                console.log('Something is wrong with the code or it is empty!');
}*/


let currentInput = '';
let currentParenthesis = '(';
function toDisplay(characters) {
    // characters is an array containing the characters ['(', ')']

    // Your code to process the characters here
    let display = ''; // Initialize an empty string to build the display content

    // Toggle between '(' and ')' for each character
    for (let i = 0; i < characters.length; i++) {
        if (characters[i] === '(') {
            display += '(';
        } else if (characters[i] === ')') {
            display += ')';
        }
    }

    // Display the result in the 'display' element
    const displayElement = document.getElementById('display');
    displayElement.textContent = display;
}
function toDisplay(value){
      currentInput += value;
      document.getElementById('display').value = currentInput;
}
function clearDisplay(){
      document.getElementById('display').value = '';
      currentInput = '';
} 

function calcuResult(){
      if(currentInput === '') return;
      try{
        currentInput = eval(currentInput);
        document.getElementById('display').value = currentInput;
      }catch(error){
          document.getElementById('display').value = 'Error';
      }
}
