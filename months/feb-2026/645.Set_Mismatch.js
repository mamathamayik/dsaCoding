
function setMismatch(nums){
    nums.sort((a,b)=>a-b);
    let j=1;
    let res=[];
    for(let i=0;i<nums.length;i++){
        if(i>0 && nums[i]===nums[i-1]){
            res[0]=nums[i];
        }
        if(nums[i]===j){
            j++;
        }
        else if(nums[i]>j){
            res[1]=j;
        }
    }
    if(res[1]===undefined){
        res[1]=j;
    }
    return res;
}

let nums=[1,2,2,4];
console.log(setMismatch(nums));


