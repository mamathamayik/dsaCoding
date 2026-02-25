function DegreeofanArray(nums){
    let count = new Map();
    let firstIndex=new Map();
    let lastIndex=new Map();
    let degree=0;

    for(let i=0;i<nums.length;i++){
        let num=nums[i];
        if(!firstIndex.has(num)){
            firstIndex.set(num,i);
        }
        count.set(num,(count.get(num)||0)+1);
        lastIndex.set(num,i);

        degree = Math.max(degree,count.get(num));
    }

    let minLen=Infinity;

    for(let [key,value] of count){
        if(degree === value){
            let length=lastIndex.get(key)-firstIndex.get(key)+1;
            minLen=Math.min(minLen,length);
        }
    }
    return minLen;
}

let nums = [1,2,2,3,1];
console.log(DegreeofanArray(nums));
