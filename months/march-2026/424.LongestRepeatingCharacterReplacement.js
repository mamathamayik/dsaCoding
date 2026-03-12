function LongestReaptingCharacter(s,k){
    let count = new Array(26).fill(0);
    let left=0;
    let maxFreq=0,maxLen=0;

    for(let right=0;right<s.length;right++){
        let index = s.charCodeAt(right)-65;
        count[index]++;

        maxFreq = Math.max(maxFreq,count[index]);

        while((right-left+1)-maxFreq>k){
            count[s.charCodeAt(left)-65]--;
            left++;
        }
        maxLen = Math.max(maxLen,right-left+1);
    }
    return maxLen;
}

let s = "AABABBA", k = 1;
console.log(LongestReaptingCharacter(s,k));
