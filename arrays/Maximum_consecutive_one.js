function maxOnes(arr){
    let i=0;
    let max =0;
    let count =0;
    while(i<arr.length){
        if(arr[i]===1){
            count+=1;
            i++;
        }
        else{
            if(count>max){
                max=count;
                count=0;
                
            }
            i++;
        }
    }
    if(count>max){
        max=count;
    }
    return max;
}

let arr = [1,1,0,1,1,1,1];
let arr2=[0,0,0,0];
console.log(maxOnes(arr));