let arr = [1,1,3,3,4,5,6,6,6];

function removeDuplicates(arr){
   let i=0;
   let j=i+1;
   while(j<arr.length){
    if(arr[i] === arr[j]){
        j++;
    }
    else{
        i++;
        arr[i]=arr[j];
        j++;
    }
   }
   return i;
}

console.log(removeDuplicates(arr))

//TC- o(n);