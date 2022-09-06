const capitalize = (word)=>{
    var wordToArray = word.split('');
    for (let i=0; i<word.length; i++) {
        if (wordToArray[i]=='a') {wordToArray[i]='A';}
        if (wordToArray[i]=='e') {wordToArray[i]='E';}
        if (wordToArray[i]=='i') {wordToArray[i]='I';}
        if (wordToArray[i]=='o') {wordToArray[i]='O';}
        if (wordToArray[i]=='u') {wordToArray[i]='U';}
        if (wordToArray[i]=='y') {wordToArray[i]='Y';}
    }
    let arrayToString = wordToArray.join('');
    return(arrayToString);
}

console.log(capitalize('abcdefghijklmnopqrstuvwxyz aeiouy'));