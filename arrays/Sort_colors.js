let arr = [2,0,2,1,1,0];
function mergeSort(arr,low,high){
    let mid = Math.floor((low+high)/2);
    if(low>=high){
        return;
    }
    mergeSort(arr,low,mid);
    mergeSort(arr,mid+1,high);
    merge(arr,low,mid,high);
    return arr;
}
function merge(arr,low,mid,high){
    let temp =[];
    let left =low;
    let right = mid+1;
    while(left<=mid && right<=high){
        if(arr[left]<=arr[right]){
            temp.push(arr[left++]);
        }
        else{
            temp.push(arr[right++]);
        }
    }
    while(left<=mid){
        temp.push(arr[left++]);
    }
    while(right<=high){
        temp.push(arr[right++]);
    }

    for(let i=low;i<=high;i++){
        arr[i]=temp[i-low]
    }
}
function sortColor(arr){
    return mergeSort(arr,0,arr.length-1);


}


console.log(sortColor(arr));