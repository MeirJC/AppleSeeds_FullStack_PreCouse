const primeNumberFromOneToN = (n)=>{ 
    let counter = 0;
    if (n==1) {return (0);}
    else if (n==2) {return(1);}
    else if (n>2) {
        counter = 1;
        for (let i=3; i<=n;i++){
            for (let j=2;j<=i;j++) {
                if (i%j==0 && i!=j) {break;}
                if (i%j==0 && i==j) {console.log(j); counter++;}
             }
        }  
    }

    return ('Counter: ',counter);
}

console.log(primeNumberFromOneToN(7));