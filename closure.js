function stopWatch(){
    let count=0;
    
    return function(){
        count++;
        return count;
    }
}


const clock_1 = stopWatch();
console.log(clock_1());
console.log(clock_1());
console.log(clock_1());
console.log(clock_1());

const clock_2 = stopWatch();
console.log(clock_2());
console.log(clock_2());
console.log(clock_1());


