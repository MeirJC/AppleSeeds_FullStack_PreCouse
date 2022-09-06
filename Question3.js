const biggestNumber = (a,b,c)=>{
    //Your Code Here :-)
    let highest_num = a
    if (b>=highest_num){highest_num=b;}
    if (c>=highest_num){highest_num=c;}
    return(highest_num);
     }

console.log(biggestNumber(1,0,0));
console.log(biggestNumber(0,1,0));
console.log(biggestNumber(0,0,1));
console.log(biggestNumber(2,2,0));
console.log(biggestNumber(0,2,2));
console.log(biggestNumber(2,2,3));
console.log(biggestNumber(1,2,3));
