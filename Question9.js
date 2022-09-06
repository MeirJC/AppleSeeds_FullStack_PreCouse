const longestWord = (sentence)=>{
    var noSpecial = sentence.replace(/[^\w\s]/gi, '')
    var arrayOfWords = noSpecial.split(' ');
    let longest=0;
    for (let i=0; i<arrayOfWords.length;i++) {
        if (arrayOfWords[i].length > longest) {longest=arrayOfWords[i].length;}
    }
    return(longest);
}




console.log(longestWord('abecd efgh hijkl$'));