
function LargetNumberTwiceofOther(nums){
    let map=new Map();
    let count=0;
    for(let i=0;i<nums.length;i++){
        map.set(nums[i],i);
    }
    nums.sort((a,b)=>a-b);
    for(let i=0;i<nums.length;i++){
        if(nums[i]*2<=nums[nums.length-1]){
            count++;
        }
    }
    if(count==nums.length-1){
        return map.get(nums[nums.length-1]);
    }
    return -1;
}

// console.log(LargetNumberTwiceofOther([3,6,1,0]));
console.log(LargetNumberTwiceofOther([1,2,3,4]));

