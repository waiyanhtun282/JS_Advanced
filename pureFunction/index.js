// Pure functions

// A part of the fuctional programming paradigram

// Why write pure function ?
// 1 Clean Code
// 2 Easy  to test
// 3 Easy to debug
// 4 Decoupled and Independent
// 5 Could be added to your utlity functions

// Rules of functional programming
// 1 The same  input always gives the same output
// 2 No side Effects

// 1 The same  input always gives the same output
// const add =(x,y) => x+y;
// console.log(add(2,3));

// const fullName =(first,last) =>`${first} ${last}`;
// console.log(fullName('Dave','Gray'));

// 2 No side Effects
const z =5;
const sum =(x,y) =>x+y+z;
console.log(sum(2,2));

// Pure functions cannot:
// Access a database,API,file syste,storage,etc;
// Modify DOM,
// or even log console

// That said clearly 'impure' functions are nessary
// but they are harder to test and debug

// Future,no input state can be modified
// That is , no data should be mutated
//  Consider all input data to be immutablee

// Impure Example 1

let x= 1;
const increment =() => x+=1;
console.log(increment());
console.log(x);

// Impure Example 2
const myArray =[1,2,3,4];
const addArray =(array,data) =>{
    array.push(data);
    return array;
}

console.log(addArray(myArray,5));
console.log(myArray);


// Refractor Example 1
const pureElement   =(num) => num+=1;
console.log(pureElement(x));
console.log(x);

// Refractor Example 2
const pureAddArray = (arr,data) => [...arr,data];
console.log(pureAddArray(myArray,6));
console.log(myArray);

// Note If you have nested  data stucture and watch Dav Gray tutorial
//  shallow copy and deep copy


// These common Higher Order Function are Pure Function

const oneFive =[1,2,3,4,5,6];
const addFive =oneFive.filter(ele => ele % 2 !==0);
console.log(addFive);

const doubled = oneFive.map(elem => elem *2);
console.log(doubled);

const sumed =oneFive.reduce((acc,elem) => acc +elem);console.log(sumed);