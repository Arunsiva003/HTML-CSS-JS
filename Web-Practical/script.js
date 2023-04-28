let firstOperand = '';
let secondOperand = '';
let operator = '';
let result = '';

function clearScreen() {
  firstOperand = '';
  secondOperand = '';
  operator = '';
  result = '';
  document.getElementById('result').value = '';
}

function appendNumber(number) {
  if (operator === '') {
    firstOperand += number;
    document.getElementById('result').value = firstOperand;
  } else {
    secondOperand += number;
    document.getElementById('result').value = secondOperand;
  }
}

function appendOperator(op) {
  operator = op;
}

function calculate() {
  let num1 = parseFloat(firstOperand)
let num2 = parseFloat(secondOperand)
switch(operator){
  case '+':
      result = num1+num2;
      break
  case '-':
      result = num1-num2;
      break
  case '*':
      result = num1*num2;
      break
  case '/':
      result = num1/num2;
      break
}
document.getElementById('result').value = result;
firstOperand=result;
secondOperand="";
operand="";
}