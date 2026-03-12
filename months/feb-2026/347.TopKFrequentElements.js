function kFrequent(nums,k){
    let map=new Map();
    let res=[];
    for(let ch of nums){
        map.set(ch,(map.get(ch)||0)+1);
    }

    let sorted=new Map([...map.entries()].sort((a,b)=>b[1]-a[1]));

    let i=0;
    for(let key of map.keys()){
        if(i===k)
            break;
        res.push(key);
        i++;
    }
    return res;
}

let nums=[1,2,1,2,1,2,3,1,3,2], k = 2;
console.log(kFrequent(nums,k));
