// let a = 5;
// let b = a;
// b++;

// console.log(a);
// console.log(b);
// // pass by value and reference
// let obj1 = { name: "Leo", password: "1232" };
// let obj2 = obj1;
// obj2.password = "45676";

// console.log(obj1);

// let d = [1, 2, 3, 4, 5];
// let e = d;
// e.push("12323");
// console.log(e);
// console.log(d);

// let obj = {
//   a: "b",
//   b: "c",
//   c: {
//     deep: " try and copy code",
//   },
// };

// let clone = Object.assign({}, obj);
// let clone2 = { ...obj };
// let superClone = JSON.parse(JSON.stringify(obj));
// obj.c.d = "hahahaha";
// console.log(obj);
// console.log(clone);
// console.log(clone2);
// console.log(superClone);

// Exercise Comapre Objects

// let user1 = { name: "nerd", org: "dev" };
// let user2 = { name: "nerd", org: "dev" };
// give code
// let eq = user1 == user2;

// fix code
// let eq = JSON.stringify(user1) == JSON.stringify(user2);

// console.log(eq);

// pass by referece

// devGray channel
// foundation knowledge for writing Pure functions
// Javascript data type
// primitive vs stuctural

// Primitive
// 1 undefined
// 2 Boolean
// 3 Number
// 4 String
// 5 null
//6 BignInt
// 7 Symbol

// Structural
// 1 Objects: new Objects,Array,Map,Set,WeakMap,Data
// 2 Functions

// Value vs Reference
// Primitive Reference
let x = 2;
let y = x;
y += 1;

console.log(x);
console.log(y);

// strucura type reference
let xArray = [1, 2, 3, 4, 5];
let yArray = xArray;
yArray.push(6);
console.log(xArray);
console.log(yArray);

// mutabel and imutable

// primitive are immutalbel
let myName = "Dave";
myName[0] = "W"; //nope
console.log(myName);

// Reassign  is not same as mutable
// myName = "David";
// console.log(myName);
// sturctural contain mutal data
// yArray[0] = 9;
// console.log(yArray);
// console.log(xArray);

// Pure Functuion  require you to avoid
// mutating data

// Imputing function that mutates data
const addToScoreHistory = (array, score) => {
  array.push(score);
  return array;
};

const scoreArray = [44, 22, 32];
console.log(addToScoreHistory(scoreArray, 14));
// This mutate the original array;
// This is consdiders is side-effect;

// Notice: 'const' doesn't make array immutable

// there is much more to pure function that will dicuss  in my next tutorial

// shallow copy vs deep copy(clones)

// shallow copy
// with the spred operator
const zArray = [...yArray, 10];
console.log(zArray);
console.log(yArray);

console.log(xArray === yArray);
console.log(zArray === yArray);

// with Object.assign();
const tArray = Object.assign([], zArray);
console.log(tArray);
console.log(tArray === zArray);
tArray.push(11);
console.log(zArray);
console.log("tArray", tArray);
