const minNumberInArr = (arr)=>{
    currentMinimum = arr[0];
    for (let i=0; i<arr.length; i++) {
        if (arr[i]<currentMinimum) {currentMinimum=arr[i];}
    }
    return(currentMinimum);
}

someArray=[1,4,8,0,3,-2,12,-10];
console.log(minNumberInArr(someArray));