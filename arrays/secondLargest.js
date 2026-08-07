let arr = [3,2,5,7,3,5,12,12,11];

function secondLargest(arr){
    let largest = arr[0];
    let secondLarge=-Infinity;
    for(let i=1;i<arr.length;i++){
        if(arr[i]>largest){
            secondLarge=largest;
            largest=arr[i];
        }
        else if (arr[i]<largest && arr[i]>secondLarge){
            secondLarge=arr[i]
        }

    }
    return secondLarge;
}
console.log(secondLargest(arr));
// TC- o(n)