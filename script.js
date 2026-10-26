const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (array) {
  return array.reduce((product, current) => product * current)
};

const power = function (a, b) {
  return a ** b;
};

const divide = (a, b) => a / b;


let numberA = 0;
let numberB = 0;


const operate = (numberA, operator, numberB) => {
  switch (operator) {
    case '+':
      return numberA + numberB;
    case '-':
      return numberA - numberB;
    case 'x':
      return numberA * numberB;
    case '÷':
      return numberA / numberB;
    case '^':
      return numberA ** numberB;
  }
  
}