let arr = [1,3,7,2,4];

function twoSum1(arr,target){
    for(let i=0;i<arr.length-1;i++){
        for(let j=1;j<arr.length;j++){
            if((arr[i]+arr[j]) === target){
                return [i,j];
            }
        }
    }
    return {};
}

function twoSum2(arr,target){
    let map = new Map()
}
console.log(twoSum1(arr,9));