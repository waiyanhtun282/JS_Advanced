const prepare = () =>{
   return {
      prepare:() =>console.log('Preparing...')
   }
}

const bake = () =>{
   return {
      bake:() =>console.log('Baraking...')
   }
}


const toss = () =>{
   return {
      toss:() =>console.log('Baking...')
   }
}

const ready = () =>{
   return {
      ready:() =>console.log('Ready!...')
   }
}

const stuff = () =>{
   return {
      stuff() {console.log('stuff!...')}
   }
}

const butter = () =>{
   return {
      butter() {console.log('buttering!...')}
   }
}



const createPizza = (size,crust,sauce) =>{
       const pizza = {
         size:size,
         crust:crust,
         sauce:sauce,
         toppings:[]
       }

       return {
         ...pizza,
         ...prepare(),
         ...bake(),
         ...ready()
       }
}


const createSlade =(size,dressing) =>{

 return {
    size:size,
    dressing:dressing,

   ...prepare(),
   ...toss(),
   ...ready()
    
 }
}

// Compare to ES6 Class syntx with extends and super()
const creatStuffedBufferedCrustPizza =(pizza) =>{
   return {
      ...pizza,
      ...stuff(),
      ...butter()
   }
}


const anotherPizza =createPizza('medium','thin','original');
const somebodyPizza =creatStuffedBufferedCrustPizza(anotherPizza);
// OR
const davPizza =creatStuffedBufferedCrustPizza(createPizza('medium','thin','original'))
const davesSlade = createSlade('side','branch');

davPizza.bake();
davPizza.stuff();
davesSlade.prepare();

console.log(davPizza);
console.log(davesSlade);

// what about toppings?
const addTopping =(pizza,topping) =>{
   pizza.toppings.push(topping);
   return pizza;
};

const jimsPizza =createPizza('medium','thin','original')
console.log(jimsPizza);
console.log(addTopping(jimsPizza,'pepperoni'));
console.log('mutation',jimsPizza);//mutation