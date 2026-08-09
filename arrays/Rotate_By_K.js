let arr = [1,2,3,4,5,6,7];

//tc-o(n) sc-o(1)
var reverse=function(arr,start,end){
    while(start<end){
        let temp = arr[start];
        arr[start]=arr[end];
        arr[end]=temp;
        start++;
        end--;
    }
    return arr;
}
function rotateArray(arr,k){
    let n = arr.length;
    k=k%n;
    reverse(arr,0,n-k-1);
    reverse(arr,n-k,n-1);
    reverse(arr,0,n-1)
    return arr;
}

console.log(rotateArray(arr,3));
