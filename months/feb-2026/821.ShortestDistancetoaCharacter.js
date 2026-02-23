function ShortestDistanceChar(s,c){
    let res=new Array(s.length);
    let prev=-Infinity;

    for(let i=0;i<s.length;i++){
        if(s[i]===c){
            prev=i;
        }
        res[i]=i-prev;
    }

    prev=Infinity;
    for(let i=s.length-1;i>=0;i--){
        if(s[i]===c){
            prev=i;
        }
        res[i]=Math.min(res[i],prev-i);
    }
    return res;
}

let s = "loveleetcode", c = "e";
console.log(ShortestDistanceChar(s,c));
