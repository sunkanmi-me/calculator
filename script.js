const btnsCtn = document.querySelector("#btns-ctn");
const display = document.querySelector("#content");
const clearAll = document.querySelector("#clearAll")
const pointBtn = document.querySelector("#decimal-point");

// console.log(clearAll);


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
  numberA = operate(parseFloat(numberA), operator, parseFloat(numberB));
  console.log(numberA)
  updateDisplay(Math.round(numberA*100)/100);
  
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

  if (["no", "%"].includes(valueClicked)) {
    alert("Sorry this feature is not yet implemented");
    return
  }

  //record numberA first  and display what was recorded
  if (className === "digit" && !operator) {
    
    if (numberA != undefined && recordInput) {
      numberA += valueClicked;
      
    } else {
      numberA = valueClicked;
      recordInput = true;
    }
    updateDisplay(numberA);
    //disable pointBtn if "." is there already in numberA
    if (numberA.includes(".")){return pointBtn.disabled = true}
    return
  }

  //record operator 
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

    // reactivate the point button here for number b input
    pointBtn.disabled = false;
    return
  }

  // record numberB and display what was recorded
  if (className === "digit" && operator) {
    if (numberB != undefined) {
      numberB += valueClicked;
    } else {
      numberB = valueClicked;
    }
    updateDisplay(numberA + operator + numberB);

    //disable pointBtn if "." is there already in numberA
    if (numberB.includes(".")){return pointBtn.disabled = true}
    
    return
  }

  if (className === "equals") {
    if (numberA && operator && numberB) {
      // alert("working")
      operateAndDisplay();
    }
  }

  //disable the the decimal  point button if it was alrealdy there
  
})



clearAll.addEventListener('click', () => {
  operator = undefined;
  numberB = undefined;
  numberA = undefined;
  updateDisplay("");
  pointBtn.disabled = false;
})

