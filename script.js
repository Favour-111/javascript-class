// 1.	What JavaScript method we I used to returned the last letter of a sentence?
// 2.	Write a program to extract “ola” from the word “interpolation” and concatenate it with the word “love programming”
// 3.	What is the difference between a slice and a substring?
// 4.	What method can you use to remove whitespace on JavaScript?
// 5.	Write a program that will make the first two characters of the word “angular” to be in uppercase.
// 6.	What is parseInt used for?
// 7.	Differentiate between pop() and push()

//question 1
//CharAt()method is used to return the last letter in a sentence exmple
let txt = 'ola';
//to return l
let ret = txt.charAt(1)
console.log(ret); 

//question 2
let txt2 = 'interpolation'
let extract = txt2.slice(6 , 9)
//removing ola from interpolation
console.log(extract);
// adding the extracted word to love programming
console.log(`${extract} love programming`);

//question 3
let quest =['If start equals stop: returns an empty string' , 'If stop is omitted: extracts characters to the end of the string', "If either argument is greater than the string's length, the string's length will be used instead."];
let myquest = quest.map(function (que) {
    return que
  });
  console.log(quest);
  
  //question 4
let txt4 = "     i love javascript"
console.log(txt4.trim());

//question 5
let text = "angular";
let result = text.slice(0, 2).toUpperCase() + text.slice(2);
console.log(result);

//questin 6
console.log('parseInt is used to convert a string to an integer');

//question 7
console.log("pop is used to remove the first string in an array");
console.log("push is used to add string at the beginning of an array");


// 8.	How can I add a new fruit to the beginning of an array.
// 9.	How can I add a new fruit to the beginning of an array?
// 10.	How can I remove “Mango” from the array?
// 11.	How can I get the number of fruits in the array?
// 12.	How can I accessed the last fruit in the array?
// 13.	What is the difference between a forEach() and a map()

//question 8
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit =fruits.unshift("grape");
console.log(fruit);
console.log(fruits);
//question 10
 fruit =fruits.pop()
console.log(fruits);
//question 11
console.log(fruits.length);
//question12
fruit =fruits.slice(3)
console.log(fruit);
// question13
console.log('The returning value The first difference between map () and forEach () is the returning value. The forEach () method returns undefined and map () returns a new array with the transformed elements. Even if they do the same job, the returning value remains different');



// 15.	Retrieve the ages of those that are above 30
// 16.	Look for the age of those that are 5
// 17.	Create a student object. Assign a key-value properties to it
// 18.	Reference the student’s department
// 19.	Create a nested object, called it exams
// 20.	Create a method inside your student object, called it exams,
// 21.	What is the “this” keyword used for?
// 22.	Create product store using array of an object.
// I.	Using the map or forEach method to loop through the product store.
// II.	Using the filter method to filter the product store by category and name
// III.	¬Using the find method to get the single product.

const age = [23, 10, 5, 30, 54, 41, 9, 10, 5];
//to retrive those with age above 30
let above30 = age.filter(element => element >= 30);
console.log(above30);
//to look for the age of people that are 5
let five = age.filter(element => element === 5);
console.log(five);
//using object
let student =[
    {
        name:'favour',
        age:17,
        department:'computer science',
        exam:{

        }
}
]
console.log(student);
console.log("this is a keyword in JavaScript that is a property of an execution context. Its main use is in functions and constructors.")

let products= [
  {
    name:"black bag",
  },
  {
    id:2,
    name:"shoe",
    price:400,
  },
  {
    id:3,
    name:"laptop",
    price:400000,
  },
  {
    id:4,
    name:"Hp laptop",
    price:500000,
  },
  {
    id:5,
    name:"bag",
    price:500,
  },
];

function renderProduct() {
  products.map((product) => {
    console.log(product.name);
  });
}
