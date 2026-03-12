function RearrangeCharacter(s,target){
    let freqS={};
    let freqT={};

    for(let ch of s){
        freqS[ch]=(freqS[ch]||0)+1;
    }

    for(let ch of target){
        freqT[ch]=(freqT[ch]||0)+1;
    }

    let result=Infinity;
    for(let ch in freqT){
        if(!freqS[ch])
            return 0;
        result=Math.min(result,Math.floor(freqS[ch]/freqT[ch]));
    }
    return result;
}
let s = "ilovecodingonleetcode", target = "code";
console.log(RearrangeCharacter(s,target));
