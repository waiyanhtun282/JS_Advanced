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
