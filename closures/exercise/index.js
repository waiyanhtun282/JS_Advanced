// Exercise 2
// let view;
// function initilize() {
//   view = "mountain";
//   console.log("view has been set!");
// }

// initilize();
// initilize();
// initilize();
// console.log(view);

// Solution2
// let view;
// function initilize() {
//   let called = 0;
//   return function () {
//     if (called > 0) {
//       return;
//     } else {
//       view = "here";
//       called++;
//       console.log("view has been set");
//     }
//   };
// }

// const startOnce = initilize();
// startOnce();
// startOnce();
// startOnce();
// console.log(view);

// exercise 3
// const array = [1, 2, 3, 4];
// for (var i = 0; i < array.length; i++) {
//   setTimeout(function () {
//     console.log("I am at index" + i);
//   }, 3000);
// }

// solution 3

// const array = [1, 2, 3, 4];
// for (let i = 0; i < array.length; i++) {
//   setTimeout(function () {
//     console.log("I am at index" + array[i]);
//   }, 3000);
// }
const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
  (function (clouserI) {
    setTimeout(function () {
      console.log("I am at index" + array[clouserI]);
    }, 3000);
  })(i);
}
