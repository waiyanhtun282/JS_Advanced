// function() + lexical scope =>closure
// closures
// function grandpa() {
//   let grandpa = "grandpa";
//   return function father() {
//     let fahter = "father";
//     return function son() {
//       let son = "son";
//       return `${grandpa} > ${father} > ${son}`;
//     };
//   };
// }

// grandpa()();
// console.log(grandpa()());

// const boo = (string) => (name) => (name2) =>
//   console.log(`${string} ${name} ${name2}`);

// const booString = boo();
// //  5 years
// const booStringName = booString();

// Exercise

// function callMayBe() {
//   setTimeout(function () {
//     console.log(callMe);
//   }, 4000);
//   const callMe = "Hi I am now here!";
// }
// callMayBe();

// functions
// This is often consfused with closure, but lexical scope is only an imporatant
// part of closure

// w3schools:'A closure is a function having access to the parent scope even after the parent function has closed'
//A closure is  created when we define a function, not when a function is execucuted

// global scope
let x = 1;
const parenfunc = () => {
  let myValue = 2;
  console.log(myValue);
  console.log(x);
  const childFunv = () => {
    console.log((x += 5));
    console.log((myValue += 2));
  };

  return childFunv;
};
const result = parenfunc();
console.log(result);
result();
result();
