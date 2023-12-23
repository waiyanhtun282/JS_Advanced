const a = function () {
  console.log("a", this);
  const b = function () {
    console.log("b", this);

    const c = {
      hi: function () {
        console.log("c", this);
      },
    };
    c.hi();
  };
  b();
};
a();

// for lexicalscope and global scope
const obj = {
  name: "Billi",
  sing() {
    console.log("a", this);
    var anotherFunc = function () {
      console.log("b", this);
    };
    anotherFunc();
  },
};
