function calculatorBuiltIn(num1, num2, operator) {
  // eval is a built-in function that evaluates a string as a mathematical expression
  return eval(num1 + operator + num2);
}

// raw implementation without using the eval function
function calculatorSwitch(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2; // return immediately exits the function so break is not needed
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}

// better implementation
function calculatorIfElse(num1, num2, operator) {
  // Lets keep a result variable to store the result
  let result;
  // Use if/else if/else statements to determine which operation to perform
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else {
    throw new Error("Invalid operator");
  }
  return result;
}

// best implementation
function calculator(num1, num2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      throw new Error("Invalid operator");
  }
  return result;
}

module.exports = calculator;
