// Type corecion\
// for javascript in 1= true and 0 is false
// if (1) {
//   console.log(5);
// }

// fot negative
// console.log(-0 === +0);

// console.log(Object.is(-0, +0));

// console.log(NaN === NaN);

// for exercise Type coercion
console.log(false == "");
// ans=>true
console.log(false == []);
// (ans) => true;
console.log(false == {});
// ans: false;
console.log("" == 0);
// (ans) => true;

console.log("" == []);
// (ans) => true;

console.log("" == {});
// (ans) => false;

console.log(0 == []);
// (ans) => true;
console.log(0 == {});
// (ans) => false;

console.log(0 == null);
// (ans) => false;
