const getWordByNumber = (num)=>{ 
    //Your Code Here :-)
    switch (num) {
        case 0:
            return('zero');
            break;
        case 1:
            return('one');
            break;
        case 2:
            return('two');
            break;
        case 3:
            return('three');
            break;
        case 4:
            return('four');
            break;
        case 5:
            return('five');
            break;
        case 6:
            return('six');
            break;
        case 7:
            return('seven');
            break;
        case 8:
            return('eight');
            break;
        case 9:
            return('nine');
            break;
        default:
            return('invalid');
    }
    }

    console.log(getWordByNumber(0));
    console.log(getWordByNumber(1));
    console.log(getWordByNumber(2));
    console.log(getWordByNumber(3));
    console.log(getWordByNumber(4));
    console.log(getWordByNumber(5));
    console.log(getWordByNumber(6));
    console.log(getWordByNumber(7));
    console.log(getWordByNumber(8));
    console.log(getWordByNumber(9));
    console.log(getWordByNumber(10));
    console.log(getWordByNumber('a'));