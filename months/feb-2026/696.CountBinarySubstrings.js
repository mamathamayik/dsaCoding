
function CountBinary(s){
    let previousCount=0;
    let nextCount=1;
    let res=0;

    for(let i=1;i<s.length;i++){
        if(s[i]===s[i-1]){
            previousCount=nextCount;
        }
        else{
            previousCount=nextCount;
            nextCount=1;
            res+=Math.min(previousCount,nextCount);
        }
        
    }
     res+=Math.min(previousCount,nextCount);
     return res;
}

console.log(CountBinary("00110011"));