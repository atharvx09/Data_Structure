let arr = [12,5,6,2,4,9];

function selectionSort(arr){
    let length = arr.length;
    for(let i=0;i<length-1;i++){
        let minIndex =i;
        for(let j=i+1;j<length;j++){
            if(arr[minIndex]>arr[j]){
                minIndex=j;
            }
        }
        let temp = arr[i];
        arr[i]=arr[minIndex];
        arr[minIndex]=temp;

    }
    return arr;
}

console.log(selectionSort(arr));

// Selection Sort repeatedly finds the minimum element from the unsorted part of the array and swaps it with the first unsorted element.
// TC-o(n^2) SC-o(1)