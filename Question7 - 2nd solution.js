const primeNumberFromOneToN = (n)=>{ 
    let counter = 0;
    if (n<2) {return (0);}
    for (let i=2; i<=n;i++){
        for (let j=2;j<=i;j++) {
            if (i%j==0 && i!=j) {break;}
            if (i%j==0 && i==j) {counter++;}
            }
    }  
    return (counter);
}
console.log(primeNumberFromOneToN(7));

// Secont If statment with printing each prime number we found
// if (i%j==0 && i==j) {console.log(j); counter++;}