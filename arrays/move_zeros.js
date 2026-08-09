let arr = [1,0,1];

function moveZeros(arr){
    let i=0;
    let j=1;
    while(j<arr.length){
        if(arr[i]===0 && arr[j]!== 0){
            let temp = arr[j];
            arr[j]=arr[i];
            arr[i]=temp;
            i++;
            j++;
        }else if(arr[i]!==0){
            i++;
            j++;
        }
        else{
            j++;
        }
    }
    return arr;
}

console.log(moveZeros(arr));