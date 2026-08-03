// Merge sort is all about the divide and merge

function mergeSort(arr,low,high){
    let mid = Math.floor((low+high)/2);
    if(low>=high){
        return;
    }
    mergeSort(arr,low,mid);
    mergeSort(arr,mid+1,high);
    merge(arr,low,mid,high);
}

function merge(arr,low,mid,high){
   let temp = [];
   let left=low;
   let right=mid+1;

   while(left<=mid && right<=high){
    if(arr[left]<=arr[right]){
        temp.push(arr[left++])
    }
    else{
        temp.push(arr[right++])
    }
   }
   while(left<=mid) temp.push(arr[left++]);
   while(right<=high) temp.push(arr[right++]);

   for(let i= low;i<=high;i++){
    arr[i]=temp[i-low];
   }
}

let arr = [2,3,4,2,4,2,4,2,5,5,6,65];
mergeSort(arr,0,arr.length-1);
console.log(arr);


//TC-o(nlogn) SC-o(n)