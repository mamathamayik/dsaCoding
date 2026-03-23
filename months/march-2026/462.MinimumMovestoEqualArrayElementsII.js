function MinimumMoves2(nums) {
    nums.sort((a,b)=>a-b);

    let median = nums[Math.floor(nums.length/2)];
    let moves=0;

    for(let num of nums){
        moves+=Math.abs(num-median);
    }

    return moves;
}

let nums = [1,10,2,9];
console.log(MinimumMoves2(nums));
