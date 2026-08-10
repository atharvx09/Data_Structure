let arr = [1,1,2,1,3,1,1,1,1,1,1,1,1];

function longest_subarray_with_sum_k(arr,k){
    let maxSubArrayLength =0;
    let i=0;
    let j=0;
    let sum =0;

    // 1 1 1 99 1 1 1 1

    // 1 2 3 4 5 6 7

    while(j<arr.length){
        let count =0;
        sum += arr[j];
        while(sum>k){  // 1,1,1,99,1,1,1,1,1,1,1 for this types of test case we did the while(sum>k)
            sum = sum - arr[i];
            i++;
        }
        

        if(sum === k){
            count = j-i+1; 
            maxSubArrayLength = Math.max(maxSubArrayLength,count);
        }
        j++;
       
    }
    return maxSubArrayLength;
}
//tc - o(n)
// the tc will not o(n^2) becasue of 2 pointers running independently
console.log(longest_subarray_with_sum_k(arr,6));