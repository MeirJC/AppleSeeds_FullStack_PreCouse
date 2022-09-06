const countOddFromZeroToNum = (num)=>{ 
    //Your Code Here :-)
    let counter = 0;
    for (let i=0; i<=num; i++){
        if (i%2!=0){counter+=1;}
    }
    return(counter);
    }

console.log(countOddFromZeroToNum(1));
console.log(countOddFromZeroToNum(4));
console.log(countOddFromZeroToNum(7));
console.log(countOddFromZeroToNum(8));
console.log(countOddFromZeroToNum(9));
console.log(countOddFromZeroToNum(10));
console.log(countOddFromZeroToNum(11));
console.log(countOddFromZeroToNum(35));
console.log(countOddFromZeroToNum(64));