var numbers = [4,5,7,8,9];
var double = [];

numbers.map(function(element,index,array){
       console.log(element,index,array);
       double.push(element*element);
})

console.log(double);


const quibe = numbers.map( x => x*x*x);
console.log(quibe);



const bigger = numbers.filter(x => x<8);
console.log(bigger);




