let arr = [6,4,2,42,4,2];

// approach 1 - TC-o(nlogn)
function checkLargest1(arr){
    arr.sort((a,b)=>a-b);
    return arr[arr.length-1];
}
console.log(checkLargest1(arr));


//approach 2 - Tc-o(n)
function checkLargest2(arr){
    let largest = arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>=largest){
            largest=arr[i];
        }
    }
    return largest;
}
console.log(checkLargest2(arr));