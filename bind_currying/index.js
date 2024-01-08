// // function currying
// function multify(a, b) {
//   return a * b;
// }

// let multifyByTwo = multify.bind(this, 2);
// console.log(multify(4));
// let multifyByTen = multify.bind(this, 10);
// console.log(multifyByTen);
// const b = {
//   name: "leo",
//   say() {
//     console.log(this);
//   },
// };

// const c = {
//   name: "messi",
//   say() {
//     return function () {
//       console.log(this);
//     };
//   },
// };

// const d = {
//   name: "jay",
//   say() {
//     return () => console.log(this);
//   },
// };

// console.log(d.say());

// Exercise code
// const character = {
//   name: "Simon",
//   getCharacter() {
//     return this.name;
//   },
// };
// const giveMeTheCharacterNOW = character.getCharacter.bind(character);

// console.log(giveMeTheCharacterNOW());


// Currying

//  currying basic

const bandWitch=(integrate1) =>{
  return (integrate2) =>{
    return (integrate3) =>{
      return `${integrate1} ${integrate2} ${integrate3}`;
    }
  }
}

const myBandWith =bandWitch('bacon')('letir')('tomato');
console.log(myBandWith);

// nestd curryinf

// let ' s refractor
const player = (team1) =>(team2) =>(team3) => `${team1} ${team2} ${team3}`;
const myPlayer =player('aresnal')('realMadrid')('barcelona');
console.log(myPlayer);

// Another Example of currting functions


const multiyBy=(x,y) =>x*y;
const curringMultify =x =>y => x * y;

console.log(multiyBy(2,3));
console.log(curringMultify(4)(5));
console.log(curringMultify(6));


const twelve =curringMultify(20);
console.log(twelve(10));

// Another Example 
const updateElementText = id => content => document.querySelector(`#${id}`).textContent=content

const  updateElementHeader =updateElementText('header');
updateElementHeader('HEllO WORLD');


// Another common use for currying function composition
// Allow calling small functions in a specific order

// fuction compositon with currying function
const addCustomer = fn =>(...args) =>{
  console.log('Saving Custom info');
 return fn(...args) ;
};

const processorOrder = fn => (...args) =>{
  console.log(`Prcess order is ' ${args[0]}`);
  return fn(...args);
}

let completeOrder = (...args) =>{
  console.log(`Complet Orde #${[...args].toString()}`);
   
}

completeOrder = (processorOrder(completeOrder));
console.log(completeOrder);
completeOrder=(addCustomer(completeOrder));
console.log(completeOrder);
completeOrder('10000')
