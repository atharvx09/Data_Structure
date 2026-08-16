let arr = [-1,3,2,4,-6,-7];
function rearrangeBySign(arr){
    let i=0;
    let j=0;
    let cur=0;
    let temp = [];
    while(i<arr.length || j<arr.length){
        if(arr[i] >=0 && cur%2===0){
            temp.push(arr[i++]);
            cur++;
        }else i++;
        if(arr[j] <0 && cur%2 !==0){
            temp.push(arr[j++]);
            cur++;
        }else j++;
    }
    return temp;
}

console.log(rearrangeBySign(arr));