function UniqueNumOccurence(nums){
    let map=new Map();
    let set=new Set()

    for(let i=0;i<nums.length;i++){
        map.set(nums[i],(map.get(nums[i])|0)+1);
    }
    for(let value of map.values()){
        if(!set.has(value))
            set.add(value);

        else
            return false;
    }
    return true;
}

console.log(UniqueNumOccurence( [-3,0,1,-3,1,1,1,-3,10,0]));
console.log(UniqueNumOccurence( [1,2]));

