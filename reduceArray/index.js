let euros =[29.76,41.85,46.5];

// let sum =euros.reduce(function(total,amount)  {
//     return total+amount;
// })
// console.log(sum);


const average = euros.reduce((total, amount, index, array) => {
  total += amount;
  if( index === array.length-1) { 
    return total/array.length;
  }else { 
    return total;
  })
  
