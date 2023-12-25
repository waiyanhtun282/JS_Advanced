// const person = {
//   name: "WaiYan",
//   health: 50,
//   heal(num1, num2) {
//     return (this.heal += num1 + num2);
//   },
// };

// const arch = {
//   name: "Leo",
//   health: 35,
// };

// console.log("1", arch);
// const healSarch = person.heal.bind(arch, 100, 30);
// healSarch();
// console.log("2", arch);

const array = [1, 2, 3];

function getMaxNumber(array) {
  return Math.max.apply(null, array);
}

const max = getMaxNumber(array);
console.log(max);
