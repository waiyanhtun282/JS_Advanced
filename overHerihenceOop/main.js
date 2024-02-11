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
const createPizza =(size,curst,sauce) =>{
 const pizza ={
    size:size,
    curst:curst,
    sauce:sauce,
    toppings:[]
 }
 return {
    ...pizza,
    ...curst,
    ...sauce,
    
 }
}