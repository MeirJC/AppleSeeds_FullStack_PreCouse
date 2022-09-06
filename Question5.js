const numFactorial = (num)=>{ 
    //Your Code Here :-)
    let res=1;
    for(let i=1;i<=num;i++){
        res=res*i;
    }
    return(res);
    }

console.log(numFactorial(1));
console.log(numFactorial(2));
console.log(numFactorial(3));
console.log(numFactorial(4));
console.log(numFactorial(5));
console.log(numFactorial(6));
console.log(numFactorial(7));