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