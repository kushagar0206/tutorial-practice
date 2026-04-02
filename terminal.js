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
// items.Price = "My";
// console.log(items);

//var is a globally scoped don't use it
// var a = 12;

// {
//   var a = 13;
//   console.log(a);
// }
// console.log(a);

//let it is a blocked scoped
// let b = 22;

// {
//   let b = 23;
//   console.log(b);
// }

// console.log(b);

//Automatic giving space
// let n = "Kushagar";
// console.log("My Name is", n);

//Not giving space
// let x = "Kushagar";
// console.log("My Name is" + x);

//Question:1
// let student = {
//   name: "Kushagar",
//   "phone no": "8979287349",
//   marks: "76",
//   year: "3rd",
// };

// student.semester = "6th";
// student.name = "Kushagar";
// student.phoneNo = "8979287349";
// student.marks = "76";
// student.class = "BCA";

// console.log(student);

// Question:2
// let o = "Kushagar";
// console.log(o);
// o = 1234567;
// console.log(a)

//Question 3
// console.log(typeof o);

//Question 4
// const obj = {
//   a: "apple",
//   b: 12234,
// };

// console.log(typeof obj.b);

// console.log(obj);

//Question 5
// const obj = {
//   a: "apple",
//   b: 12234,
// };

// obj.a = "Kushagar";
// console.log(obj);

//Question 6
// let dictionary = {
//   lion: "A wild animal ",
//   apple: "A fruit",
//   mobile: "A very pocketly and smart device",
//   speaker: "A device can play or make a sound or noise",
//   dictionary: "collection of words with there meaning like this",
// };

// console.log(dictionary.lion);

// let age = 19;

// if (age > 17) {
//   console.log(age++, "You Can Vote");
// } else {
//   console.log("You Cannot Vote");
// }

// let name = "Kushagar";
// let age = "12";
// // let y = 12;
// // x = --y;
// // console.log(x);

// if (name == "Kushagar" && age > 18) {
//   console.log("All Conditions True");
// } else if (name == "Kushagar" || age > 18) {
//   console.log("One Condition True");
// } else {
//   console.log("Not Even Single Condition True");
// }

//Ternary Operator
// let a = 17;
// let b = 14;

// let c = a > b ? a - b : b - a;

// console.log(c);

// let name = "Kushagar";
// let age = "12";

// if (age === 12) {
//   console.log("Value and Type bot are same");
// } else if (age == 12) {
//   console.log("Value is same");
// } else {
//   console.log("Value and type both are not same");
// }

// console.log(!0);

//Question 1
// let age = 12;

// if (age >= 10 && age <= 20) {
//   console.log("Your age is:", age);
// } else if (age < 10) {
//   console.log("Your is less than 10");
// } else if (age > 20) {
//   console.log("You age is greater than 20");
// }

//Question 2
// let age = 20;
// switch (true) {
//   case age >= 10 && age <= 19:
//     console.log("Your age is greater than or equal to 10");
//     break;
//   case age <= 20:
//     console.log("Your age is less than or equal to 20");
//     break;
//   default:
//     console.log("Your age not lies between 10 to 20");
//     break;
// }

// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
//   default:
//     day = "Unknown";
// }
// console.log(day); // Output will vary based on the current day

// console.log(new Date().getDay());

//Question 3

// let n = 18;
// if (n % 2 === 0 && n % 3 === 0) {
//   (console, console.log(n, "This number is divisible by 2 and 3 both"));
// } else {
//   console.log(n, "This number is not divisible by 2 and 3 both");
// }

//Question 4
// let n = 3;
// if (n % 2 === 0 || n % 3 === 0) {
//   console.log(n, "this number is divisible by 2 or 3 one of them");
// }

//Question 4
// let age = 17;
// age >= 18 ? console.log("You can drive") : console.log("You cannot drive");

//For Loop
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

//for-in loop
//It is used for object keys and values
// let obj = {
//   name: "Kushagar",
//   collegeName: "R.V Higher Educational and Technical Institute",
//   course: "BCA",
// };

// let i = 0;
// for (let key in obj) {

//   console.log(key + ": " + obj[key], i);
//   console.log(key);
// }

//for-of loop
//It is used for arrays or Strings
// let arr = [100, "Kushagar", 300];

// for (const key in arr) {
//   console.log(key);     //Print Index
// }

// for (const element of arr) {
//   console.log(element);     //Print Element
// }

//While loop
// let i = 5;

// while (i < 5) {
//   console.log(i);
//   i++;
// }

//do while loop
// In any condition it runs atleast once
// let i = 5;
// do {
//   console.log(i);
//   i++
// } while (i < 5);

//Factorial
// let n = 6;
// let f = 1;

// for (let i = 1; i <= n; i++) {
//   f *= i;
//   console.log(f);
// }

//Function
// function sum(a, b) {
//   console.log(a + b)
// }

// sum(4, 6);

//Function with return value
// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(4, 6));

// Arrow Function
// let sum = (a, b) => {
//   console.log("function...")
//   return a + b;
// };
// console.log(sum(1,1))
// // sum(4, 8)

//Use random Math function
// let random = Math.random();
// console.log(random);

// function rndmVlueGeneratoe() {
//   let random = Math.random();
//   console.log(random);
// }

// for (let i = 0; i < 100; i++) {
//   rndmVlueGeneratoe();
// }

//Create a Faulty Calculator

// let random = Math.random();
// let firstNumber = prompt("Enter First Number");
// let operator = prompt("Enter Operator");
// let secondNumber = prompt("Enter Second Number");

// let obj = {
//   "+": "-",
//   "*": "+",
//   "-": "/",
//   "/": "**",
// };

// if (random > 0.1) {
//   alert(firstNumber + operator + secondNumber);
// } else {
//   operator = obj[operator];
//   alert(firstNumber + operator + secondNumber);
// }

// let random = Math.random();
// let firstNumber = 4;
// let operator = "+";
// let secondNumber = 7;

// if (random > 0.1) {
//   console.log(random);
//   console.log("Correct");

//   if (operator == "+") {
//     let sum = firstNumber + secondNumber;
//     console.log(sum);
//   } else if (operator == "-") {
//     let subtract = firstNumber - secondNumber;
//     console.log(subtract);
//   } else if (operator == "*") {
//     let multiply = firstNumber * secondNumber;

//     console.log(multiply);
//   } else if (operator == "/") {
//     let divide = firstNumber / secondNumber;

//     console.log(divide);
//   }
// } else {
//   console.log(random);
//   console.log("Faulty");
//   if (operator == "+") {
//     let subtract = firstNumber - secondNumber;

//     console.log(subtract);
//   } else if (operator == "-") {
//     let sum = firstNumber + secondNumber;

//     console.log(sum);
//   } else if (operator == "*") {
//     let divide = firstNumber / secondNumber;

//     console.log(divide);
//   } else if (operator == "/") {
//     let exponant = firstNumber ** secondNumber;

//     console.log(exponant);
//   }
// }

//Strings
// let a = "Kushagar";
// let b = 'Kushagar';
// console.log(b);

//Template Literals(Backtics"`")
// let a = `Kushagar`;
// let b = `The name "is" Kushagar`
// console.log(b)

//Directly insert in template literal it is called (Interpolation) use of dollar sign($)
//It is work with Backtics(`) only not Double Quotes(") or Single Quotes(')
// let name = `Kushagar`;
// let b = `This is ${name}`;
// console.log(b);

//Escape Sequence Character Use with Backslash(\)
//New Line (\n)
//Horizontal Tab (\t)
//carriage Return (\r)

// let name = `Adam D` Angelo`       ---->       //Create Problem(X)

// let name = `Adam D\` Angelo`;
// let a = `Monkey D\n Luffy`;
// console.log(a);

//String Properties and Methods
// let name = "Kushagar";

// // name.length;

// name.toUpperCase()

// name.toLowerCase();

// name.slice(2, 6)

// name.slice(4)

// let fullName = "Kushagar Bhai";
// let newName = fullName.replace("Bhai", "Upadhyaya")

// console.log(fullName + "\n" + newName);

// let name1 = "Kushagar";
// let name2 = "Upadhyay";
// let name3 = name1.concat(" ", name2, " Yes")
// console.log(name3)

// let name = "       Kushagar      a  ";
// let newName = name.trim();
// console.log(newName)

// let name = "Kushagar";
// name[4];
// console.log(name[5]);

//Strings are immutable. It can't change
// let name = "Kushagar";
// name = "Krishan";     // A new string "Krishan" is created, and the 'name' variable now points to it
// console.log(name);

//Question 1
// let a = "har\ ".length;
// console.log("har\ ".length);

//Question 2
// let s = "Kushagar";
// // console.log(s.endsWith("r"));
// // console.log(s.endsWith("r", 8));
// console.log(s.startsWith("k"))

//Question 3
// let a = "Kushagar";
// console.log(a.toUpperCase());
// console.log(a.toLowerCase());

//Question 4
// let str = "Please give Rs 1000";
// let a = str.match(/\d+/);
// console.log(a[0])

//Question 5
// let name = "Kushagar";
// let n = name.replace(name[3], "c")
// console.log(n)


//ARRAYS

// let arr = [23, 34, 44,566];
// // console.log(arr);

// arr[2] = "Kushagar upadhyay"
// console.log(arr)

// let a = [1, "Harry", false]
// typeof a
// // console.log(a.length)
// console.log(typeof a)


//Array Methods
//1. toString()  -->  It converts the array into String
// let arr = [12, 34, "harry", 56]
// let a = arr.toString()
// console.log(typeof arr + "\n" +  a)
// console.log(typeof a + "\n" + a)


//2. join()  --> It fill the commas from given value  like symbol, number etc
// let arr = [12, 22, 34, "harry", 45]
// let j = arr.join("-")
// console.log(arr.join("@"))
// console.log(j)


//3. pop() -->  It removes last element and return it 
// let arr = [1, 2, 3, 4, 5, 6]
// console.log(arr)
// console.log("Before pop length of array is: " + arr.length)
// console.log("Pop Element is: " + arr.pop())
// console.log("After pop length of array is: " + arr.length)
// console.log(arr)


//4. push()  -->  It add the element in last and modifiy the array
// let arr = [1, 2, 3, 4, 5]
// arr.push("harry")
// console.log(arr)



//5. shift()  -->  It removes first element and return it 
// let arr = [1, 2, 3, 4, 5]
// console.log(arr.shift())
// console.log(arr)


//6. unShift()  -->  It add the element in the beginning and return new length
// let arr = [1, 2, 3, 4, 5]
// console.log(arr.unshift(15, 12, 56))
// console.log(arr)
// console.log(arr.length)


//7. delete  -->  In array the delete operator is delete the array to index but not change length
// let arr = [1, 2, 3, 4, 5]
// console.log(delete arr[0])
// console.log(arr)


//8. delete  -->  In object the delete operator remove the key and value and modifiy ther obj
// let obj = {
//     name: "Kushagar",
//     age: "23",
//     role: "Software Developer"
// }
// delete obj.age
// console.log(obj)


//9. sort()  -->  It sort and array in alphabetically order and modifies the original array
// let arr = ["Abde", "Adce", "Abcde", "Acde"]
// console.log(arr.sort())
// console.log(arr)


//10. splice()  -->  It is used to add, remove, or replace elements in an array. It changes the original array
// splice(start, deleteCount, item1, item2 . . .)
// let arr = [1, 2, 3, 4, 5]
// console.log(arr.splice(1, 2, 7, 9)) // It return delete items
// console.log(arr)



