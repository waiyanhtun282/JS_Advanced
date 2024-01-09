// In Programming recursive function occurs when a function calls itself;

// Any iterator function (ask function with a loop) can be recursive fuction

// iterator function


const iteratorTwo =(num =1) =>{
    while(num <= 10){
        console.log(num);
        num++;
    }
}
// console.log(iteratorTwo());


// recursice function is 2 parts
// 1 rescursive call the function
// 2 at least one condition is least exit

const recurToTen =(num=1) =>{
    if(num > 10) return;
    console.log(num);
    num++;
    recurToTen(num);    
}
// recurToTen();

// "With Great Power Comes Great Responsibility"
// Reasons to use (not abuse) Recursion
// 1) Less Code
// 2) Elegant Code (aka Pleasing to Look at)
// 3) Increased Readability

// Reasons to NOT use Recursion
// 1) Performance
// 2) Possibly more difficult to debug (aka follow the logic)
// 3) Is the Readability Improved?


// The Standard Example: The Fibonacci Sequence
// 0, 1, 1, 2, 3, 5, 8, 13, 21, etc.


// Without Recursion
const Fibonacci =(num,array=[0,1]) =>{
    while(num > 2){
       const [nextLast,Last] =array.slice(-2);
       array.push(nextLast+Last);
       num -=1;
    }
    return array;
}

// console.log(Fibonacci(12));
// With Recursion

const fib =(num,array=[0,1]) =>{
    if(num<=2) return array;
    const [nextLast,Last] =array.slice(-2);
    // console.log("nextLast",nextLast,'Last',Last);
    return fib(num -= 1,[...array,nextLast+Last]);

}

console.log('with recursion',fib(12));