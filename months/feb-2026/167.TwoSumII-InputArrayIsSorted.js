function twoSum(nums,target){
    let left=0,right=nums.length-1;

    while(left<right)
    {
        let sum=nums[left]+nums[right];
        if(sum===target){
            return [left+1,right+1];
        }
        else if(sum>target){
            right--;
        }
        else
            left++;
    }
    return [-1,-1];
}

let numbers = [2,3,4], target = 6;
console.log(twoSum(numbers,target));
