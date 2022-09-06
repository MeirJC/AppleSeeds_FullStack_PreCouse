const divideOrHasSeven = (start,end)=>{ 
    let counter = 0;
    for (let i=start; i<=end;i++){
        if (i%7==0){
            counter++;
        }
    }
    for (let i=start; i<=end;i++){
        let checked_num = i;
        while (checked_num>0){
            if (checked_num%10==7 && i%7!=0){
                counter++;
                break;
                // checked_num=Math.floor(checked_num/10);
            }
        checked_num=Math.floor(checked_num/10);
        }
        checked_num=i+1;
    }
    return (counter);
}
console.log(divideOrHasSeven(1,7));
console.log(divideOrHasSeven(1,15));
console.log(divideOrHasSeven(7,21));
console.log(divideOrHasSeven(22,29));
console.log(divideOrHasSeven(70,79));
