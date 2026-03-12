function combinationSum2(candidates, target) {
    let res=[];
    candidates.sort((a,b)=>a-b);

    function backtrack(start,target,path){
        if(target===0){
            res.push([...path]);
            return;
        }

        for(let i=start;i<candidates.length;i++){

            if(i>start && candidates[i]===candidates[i-1]){
                continue;
            }

            if(candidates[i]>target){
                break;
            }

            path.push(candidates[i]);

            backtrack(i+1,target-candidates[i],path);

            path.pop();
        }
    }
    backtrack(0,target,[]);
    return res;
    
}

let candidates = [10,1,2,7,6,1,5], target = 8;
console.log(combinationSum2(candidates,target));
