function getArrayMaxNumber(arr){
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        if(result < arr[i]) result = arr[i];
    }
    return result;
}
const max = getArrayMaxNumber([10, 50, 30]);
console.log(max);