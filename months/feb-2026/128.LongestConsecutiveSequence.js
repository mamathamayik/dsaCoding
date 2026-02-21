
function LongestConsecutive(nums){
    nums.sort((a,b)=>a-b);

    let current=1;
    let max=1;

    for(let i=1;i<nums.length;i++){
        if(nums[i]===nums[i-1]){
            continue;
        }
        if(nums[i]===nums[i-1]+1){
            current++;
        }
        else{
            max=Math.max(max,current);
            current=1;
        }
    }
    max=Math.max(max,current);

    return max;
}

console.log(LongestConsecutive([100,4,200,1,3,2]));
