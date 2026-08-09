let arr = [1,6,4,5,2];
//tc-o(n)
function missing_Number(arr){
    let n = arr.length+1;
    let sum = Math.floor((n*(n+1))/2);
    let arrSum =0;
    for(let i=0;i<n-1;i++){
        arrSum+=arr[i];
    }

    return sum-arrSum;
}

// tc-o(n) but no variable needed 
function missing_Number2(arr){
    let xor1=0;
    let xor2=0;
    for(let i=0;i<arr.length-1;i++){
        xor2=xor2^arr[i];
        xor1=xor1^(i+1);
    }
    xor1=xor1^arr.length;
    return xor1^xor2;
}

console.log(missing_Number2(arr));