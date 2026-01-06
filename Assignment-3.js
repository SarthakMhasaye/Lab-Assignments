console.log("Hello World !..")
console.log("--------------------------------")

var x = 5;
let y = 10;
const z = 15;
console.log("THe addition of x,y,z is:",x+y+z);
console.log("--------------------------------")

let str = "Hello";
let num = 25;
console.log("THe addition of string + number :",str+num);
console.log("--------------------------------")

let bigIntVal = 123456789123456789n;
console.log("The big value:",bigIntVal);
console.log("--------------------------------")

let isAvailable = true;
let temp =5;
console.log("The value of temp variable is :",temp)
console.log("--------------------------------")

let emptyValue = null;
let sym = Symbol("id");
let person = { name: "John", age: 25 };
console.log("The name of person is:",person.name);
console.log("The age of person is:",person.age);
console.log("--------------------------------")

let fruits = ["Apple", "Cherry", "Banana"];
console.log("THe array of fruit contain:",fruits);

let index = fruits.indexOf("Banana");
let sortedFruits = fruits.sort();
console.log("the sorted array of fruits are:",sortedFruits)
console.log("--------------------------------")

function convertToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

let conversion = convertToFahrenheit(52);
console.log(`the conversio of 52 celcus to fahrenheit is :${conversion}`)
console.log("--------------------------------")

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(`The fibonacci number from 1 to 10 are : ${fibonacci}`)
console.log("--------------------------------")

let firstName = "Sarthak";
lastName = "Mhasaye";

let fullName = firstName + " " + lastName;
console.log(fullName)
console.log("--------------------------------")

let length = fullName.length;
console.log(`The length of full name is: ${length}`)
console.log("--------------------------------")