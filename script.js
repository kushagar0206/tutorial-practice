// console.log("Hello World");

//Create Object
// let o = {
//   name: "Kushagsr",
//   Role: "Software Developer",
// };

//Print Object
// console.log(o);

//Change Existing Object
// o.name = "Ankush";

// console.log(o);

// const items = {
//   name: "Led Bulb",
//   Price: "150",
// };

// console.log(items);

// items.Price = "120";
// items.Brand = "Havells";
// console.log(items);

// alert("Hello");

// let name = prompt("Enter Your Name");

// console.log(name);

// //it give true or fale or yes or no
// let c = confirm("Chose any one");

// //it take value from c and print it on browser console
// console.log(c);

//Create a Faulty Calculator
let random = Math.random();
let firstNumber = prompt("Enter First Number");
let operator = prompt("Enter Operator");
let secondNumber = prompt("Enter Second Number");

if (random > 0.1) {
  console.log(random);
  console.log("Correct");

  if (operator == "+") {
    let sum = firstNumber + secondNumber;
    alert(sum);
    console.log(sum);
  } else if (operator == "-") {
    let subtract = firstNumber - secondNumber;
    alert(subtract);
    console.log(subtract);
  } else if (operator == "*") {
    let multiply = firstNumber * secondNumber;
    alert(multiply);
    console.log(multiply);
  } else if (operator == "/") {
    let divide = firstNumber / secondNumber;
    alert(divide);
    console.log(divide);
  }
} 
else {
  console.log(random);
  console.log("Faulty");
  if (operator == "+") {
    let subtract = firstNumber - secondNumber;
    alert(subtract);
    console.log(subtract);
  } else if (operator == "-") {
    let sum = firstNumber + secondNumber;
    alert(sum);
    console.log(sum);
  } else if (operator == "*") {
    let divide = firstNumber / secondNumber;
    alert(divide);
    console.log(divide);
  } else if (operator == "/") {
    let exponant = firstNumber ** secondNumber;
    alert(exponant);
    console.log(exponant);
  }
}
