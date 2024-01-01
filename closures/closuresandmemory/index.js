// memory efficient
// function heavyDuty(index) {
//   const bigArray = new Array(7000).fill("haha");
//   console.log("created");
//   return bigArray[index];
// }

// heavyDuty(688);
// heavyDuty(688);
// heavyDuty(688);

// const getheavyDuty = heavyDuty2();
// getheavyDuty(453);
// getheavyDuty(453);
// getheavyDuty(453);
// getheavyDuty(453);

// function heavyDuty2() {
//   const bigArray = new Array(70000).fill("asdas");
//   console.log("Created Again!");
//   return function (index) {
//     return bigArray[index];
//   };
// }

// Encapsulation

// const makeNuclearButton = () => {
//   let timeWithoutDestuction = 0;
//   const passTime = () => timeWithoutDestuction++;
//   const totalPeaceTime = () => timeWithoutDestuction;
//   const launch = () => {
//     timeWithoutDestuction = -1;
//     return "FIRE";
//   };
//   setInterval(passTime, 1000);
//   return {
//     totalPeaceTime: totalPeaceTime,
//   };
// };
// const ohno = makeNuclearButton();
// ohno.passTime();
