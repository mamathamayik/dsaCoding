function LongestUncommon(strs){

    function isSequence(s,t){
        let i=0,j=0;

        while(i<s.length && j<t.length){
            if(s[i]===t[j]){
                i++;
            }
            j++;
        }
        return i===s.length;
    }

    let maxLen=-1;

    for(let i=0;i<strs.length;i++){

        let unCommon=true;

        for(let j=0;j<strs.length;j++){
            if(i==j){
                continue;
            }

            if(isSequence(strs[i],strs[j])){
                unCommon=false;
                break;
            }
        }
        if(unCommon){
            maxLen = Math.max(maxLen,strs[i].length)
        }
    }
    return maxLen;
}

console.log(LongestUncommon(["aba","cdc","eae"]));
