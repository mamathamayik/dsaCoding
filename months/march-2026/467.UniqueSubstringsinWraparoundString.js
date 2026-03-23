function UniqueSubstring(s){
    let count=new Array(26).fill(0);
    let maxLen=0;

    for(let i=0;i<s.length;i++){
        
        if(i>0 && ((s.charCodeAt(i)-s.charCodeAt(i-1)+26)%26)===1){
            maxLen++;
        }
        else{
            maxLen=1;
        }

        let index=s.charCodeAt(i)-97;
        count[index]=Math.max(count[index],maxLen);
    }

    let res=0;
    for(let num of count){
        res+=num;
    }

    return res;
}

console.log(UniqueSubstring("zab"));
