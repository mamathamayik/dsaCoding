
function LongestBalancedSubstring(s){
    let maxLen=0;
    for(let i=0;i<s.length;i++){
        let freq = new Array(26).fill(0);
        let distinct=0,maxFreq=0;

        for(let j=i;j<s.length;j++){
            let idx = s.charCodeAt(j)-97;

            if(freq[idx]===0)
                distinct++;

            freq[idx]++;

            maxFreq = Math.max(maxFreq,freq[idx]);

            let len = j-i+1;

            if(len === distinct*maxFreq){
                maxLen = Math.max(maxLen,len);
            }
        }
    }
    return maxLen;
}

console.log(LongestBalancedSubstring("abbac"));
