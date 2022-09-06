const isTen = (a, b) => {
    //Your Code Here :-)
    let c = a + b;
    if (c == 10) {
        return ('makes 10');
    } else {
        return ('nope');
    }
}

console.log(isTen(11, -1));
console.log(isTen(1, 9));
console.log(isTen(1, 8));
console.log(isTen(-10, 20));
console.log(isTen(-5, -5));
