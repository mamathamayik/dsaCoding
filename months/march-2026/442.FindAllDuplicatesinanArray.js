function FindAllDuplicate(nums){
    let map=new Map();
    let res=[];

    for(let i=0;i<nums.length;i++){
        map.set(nums[i],(map.get(nums[i])||0)+1);
    }

    for(let [key,value] of map){
        if(value===2){
            res.push(key);
        }
    }
    return res;
}
console.log(FindAllDuplicate([4,3,2,7,8,2,3,1]));
