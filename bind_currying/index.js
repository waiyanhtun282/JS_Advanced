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
const character = {
  name: "Simon",
  getCharacter() {
    return this.name;
  },
};
const giveMeTheCharacterNOW = character.getCharacter.bind(character);

console.log(giveMeTheCharacterNOW());
