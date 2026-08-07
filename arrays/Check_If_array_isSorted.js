let arr=[12,3,4,2,4,2,4];
let arr2=[1,2,3,4,4,5,6]
function checkSorted(arr){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            return false;
        }
    }
    return true;
}

console.log(checkSorted(arr2));
