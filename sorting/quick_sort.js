let arr= [4,1,7,3,2,8,9,5];

var swap = function(arr,i,j){
    let temp = arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}
function quickSort(arr,low,high){
    let i=low+1;
    let j=high;
    let pivot = arr[low];

    if(low>=high) return;

    while(i<=j){
        while(arr[i]<=pivot && i<=high) i++;
        while(arr[j]>pivot && j>=low) j--;
        if(i<j){
            swap(arr,i,j);
        }
    }
    swap(arr,low,j);
    quickSort(arr,low,j-1);
    quickSort(arr,j+1,high);
    
    return arr;
}

let sortedArray = quickSort(arr,0,arr.length-1);
console.log(sortedArray);