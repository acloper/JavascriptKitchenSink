//this is my name
let firstName = "Alex" + " " + "Loper";
//states number constant
const states = 50;
//this adds 5 and 4
let sum = 5 + 4;
//this says Hello World! when you open the webpage
function sayHello() {
  alert("Hello World!");
}
sayHello();

function checkAge(name, age) {
  if (age < 21) {
    alert("Sorry " + name + ", you aren't old enough to view this page!");
  } else {
  }
}

let Charles = { name: "Charles", age: 21 };
let Abby = { name: "Abby", age: 27 };
let James = { name: "James", age: 18 };
let John = { name: "John", age: 17 };

checkAge(Charles.name, Charles.age);
checkAge(Abby.name, Abby.age);
checkAge(James.name, James.age);
checkAge(John.name, John.age);

let veg = ["broccoli", "tomato", "squash"];

for (let i = 0; i < veg.length; i++) {
  console.log(veg[i]);
}

let pet = {
  name: "Jackson",
  breed: "golden retriever",
};

let people = [
  { name: "Aaron", age: 17 },
  { name: "James", age: 22 },
  { name: "Kody", age: 18 },
  { name: "Fred", age: 24 },
  { name: "Zach", age: 16 },
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  checkAge(people[i].name, people[i].age);
}

function getLength(word) {
  return word.length;
}

let lengthofword = getLength("Hello World");
if (lengthofword % 2 == 1) {
  console.log("The world is an odd place!");
} else {
  console.log("The world is nice and even!");
}

console.log(firstName);
console.log(states);
console.log(sum);
console.log(pet);
