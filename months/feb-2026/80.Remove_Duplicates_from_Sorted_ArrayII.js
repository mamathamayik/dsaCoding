
function Remove_duplicates(nums){
    let i=0,k=0;

    while(i<nums.length){
        let count=1;

        while(i<nums.length-1 && nums[i]===nums[i+1]){
            count++;
            i++;
        }

        let times = Math.min(count,2);
        while(times>0){
            nums[k++]=nums[i];
            times--;
        }
        i++;
    }
    return k;
}

console.log(Remove_duplicates([1,1,1,2,2,3]));
