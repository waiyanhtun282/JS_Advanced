// function() =>batman
// function(a,b) =>super man
// HOF => your man

// function() => function(a,b) =>HOF

// (1) function()
// function letAdamLogin() {
//   let array = [];
//   for (let i = 0; i < 1000000; i++) {
//     array.push(i);
//   }
//   return "Acces return adam";
// }

// function letEvaLogin() {
//   let array = [];
//   for (let i = 0; i < 1000000; i++) {
//     array.push(i);
//   }
//   return "Acces return eva";
// }

// letAdamLogin();
// letEvaLogin();

// (2) fuunction (a,b)
// function UserLogin(user) {
//   let array = [];
//   for (let i = 0; i < 1000000; i++) {
//     array.push(i);
//   }
//   return "Acces return " + user;
// }
// UserLogin("eva");

// const userName = (name) => "Access return" + name;

// function UserLogin(user) {
// why data tell to use data
//   let array = [];
//   for (let i = 0; i < 1000000; i++) {
//     array.push(i);
//   }
//   return userName(user);
// }
// UserLogin("Eva");

// higher order function

// const getUserName = (name) => "Access return" + name;

// function Authicate(verify) {
//   let array = [];
//   for (let i = 0; i < verify; i++) {
//     array.push(verify);
//   }
//   return true;
// }

// function letPerson(person, fn) {
//   // tell it what  data user  =>  function
//   if (person.level === "admin") {
//     fn(500000);
//   } else if (person.level === "user") {
//     fn(40000);
//   }
//   return getUserName(person.name);
// }

// letPerson({ level: "admin", name: "Leo" }, Authicate);

// Exercise HigherOrderFunction
// const mutlifyBy = function (num1) {
//   return function (num2) {
//     return num1 * num2;
//   };
// };

// const multifyTwo = mutlifyBy(2);
// console.log(multifyTwo(6));

const mutlifyBy = (num1) => (num2) => num1 * num2;
console.log(mutlifyBy(12)(20));
