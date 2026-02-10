var combinationSum = function(candidates, target) {
    let res=[];
    combi(0,candidates,target,res,[]);
    return res;
};

function combi(start,arr,target,res,cur){
    if(start == arr.length){
        if(target===0){
            res.push([...cur]);
        }
        return;
    }
    if(arr[start]<=target){
        cur.push(arr[start]);
        combi(start,arr,target-arr[start],res,cur);
        cur.pop();
    }
    combi(start+1,arr,target,res,cur);
}

let candidates = [2,3,6,7], target = 7;
console.log(combinationSum(candidates,target));
