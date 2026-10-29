const btnsCtn = document.querySelector("#btns-ctn");
const display = document.querySelector("#content");
const clearAll = document.querySelector("#clearAll")

// console.log(display);


let numberA;
let numberB;
let operator;
let recordInput = true;


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
    default:
      return "something is wrong"
  }
};

const updateDisplay = function (value) {
  display.textContent = value;
}

function operateAndDisplay() {
  // this function takes no input it calculate and call the display function to display it answer
  numberA = operate(parseInt(numberA), operator, parseInt(numberB));
  numberA = numberA.toString();
  console.log(numberA)
  updateDisplay(numberA);
  
  //refresh the var for next round
  operator = undefined;
  numberB = undefined;
  recordInput = false;
}



btnsCtn.addEventListener("click", (e) => {
  // console.log(e.target.textContent);
  // console.log(e.target.className);
  let className = e.target.className;
  let valueClicked = e.target.textContent;

  if (["C", "%"].includes(valueClicked)) {
    alert("Sorry this feature is not yet implemented");
    return
  }
  
  if (className === "digit" && !operator) {
    
    if (numberA != undefined && recordInput) {
      numberA += valueClicked;
      
    } else {
      numberA = valueClicked;
      recordInput = true;
    }
    updateDisplay(numberA);
    return
  }

  if (className === "operator") {

    if (operator) {
      operateAndDisplay();
      alert("working");
     }
    
    if (numberA && !operator) {
      // alert("active")
      operator = valueClicked;
      updateDisplay(numberA+valueClicked)
    }
    return
  }

  if (className === "digit" && operator) {
    if (numberB != undefined) {
      numberB += valueClicked;
    } else {
      numberB = valueClicked;
    }
    updateDisplay(numberA + operator + numberB);
    return
  }

  if (className === "equals") {
    if (numberA && operator && numberB) {
      // alert("working")
      operateAndDisplay();
    }
  }
})



clearAll.addEventListener('click', () => {
  operator = undefined;
  numberB = undefined;
  numberA = undefined;
  updateDisplay("");
})