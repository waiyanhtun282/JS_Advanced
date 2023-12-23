const person = {
  name: "WaiYan",
  health: 50,
  heal(num1, num2) {
    return (this.heal += num1 + num2);
  },
};

const arch = {
  name: "Leo",
  health: 35,
};

console.log("1", arch);
person.heal.apply(arch, [100, 30]);
console.log("2", arch);
