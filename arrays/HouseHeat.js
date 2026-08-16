
function houseHeat(h1,h2,r){
    let set = new Set();
    for(let i=0;i<h2.length;i++){
        for(let j=h2[i]-r;j<=h2[i]+r;j++){
            if(j>0){
                set.add(j);
            }
        }
    }
    for(let k=0;k<h1.length;k++){
        if(!set.has(h1[k])){
            return false;
        }
    }
    return true
}
function houseHeat2(h1,h2,r){
    let i=0;
    let j=0;
    while(j<h2.length){
        
        for(let a=h2[j]-r;a<=h2[j]+r;a++){
            if(h1[i]===a){
                i++;
            }
            
        }
        
        if(i===h1.length){
            
            return true;
        }
        j++;
    }
    return false;
}

console.log(houseHeat2([2,5,7,13,17],[3,7,15],2))