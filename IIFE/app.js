// IIFE -Immediatley Invoke function Experssion
// Variations
// with anonymous arrow function inside
(() =>{
// do stuff
})();

(function(){
// do stuff
})();

// with a fuction recursive function
(
    function(){
       num++;
       console.log(num);
        return num === 5 ? myIFEE(num) : console.log('finisshed!')
    }
)(num=0);

// Reason 1) Does  not the pullae the gloabl objects namespace

// global
const x ='whatever';

const helloWorld =() =>'hello world';

// isolate decrations wihthin function
(() =>{
        const x ='iff whatever';
        const helloWorld= () =>'Hello IFF';
        console.log(x);
        console.log(helloWorld());
    })();

console.log(x);
console.log(helloWorld());

// Reason 2)Privates Varaiables and method  from CLosure
const increment =(() =>{
  let counter =0;
  console.log(counter);

  const credits =(num) =>console.log(`I have ${num} credits`);
  return () => { counter++;credits(counter)}
})();
increment();
increment();
// credits(3)//ref error

// Reason3)The Module Pattern

const Score =(() =>{
    let count =0;
    return {
        current:() =>{ return count},
        increment:() =>{ count ++},
        reset:() =>{ return count =0}
    }
})()

Score.increment();
console.log(Score.current());
Score.increment();
console.log(Score.current());
Score.current();
console.log(Score.reset());


// Revilidation Pattern is a varaition of Module Pattern
const Game =(() =>{
    let count =0;
    const current = () =>{ return `Game Score is ${count}`};
    const increment =() =>{ count ++};
    const reset =() =>{ return count =0};
    return {
        current:current,
        increment:increment,
        reset:reset
    }
})()

Game.increment();
console.log(Game.current())


// Injection name space
((namespace) =>{
 namespace.count=0;
 namespace.current=function() { return `App count is ${this.count}`};
 namespace.increment=function () {this.count++};
 namespace.reset=function() {this.count =0}

})(window.App = window.App || {})

App.increment();
console.log(App.current());