function TopKFrequentWords(words,k){
    let map=new Map();
    let res=[];

    for(let w of words){
        map.set(w,(map.get(w)||0)+1);
    }

    let sorted = new Map([...map.entries()].sort((a,b)=>{
        if(a[1]===b[1]){
            return a[0].localeCompare(b[0]);
        }
        return b[1]-a[1];
    }))

    let i=0;
    for(let [key,value] of sorted){
        if(i!==k){
            res.push(key);
            i++;
        }
    }
    return res;
}

let words = ["i","love","leetcode","i","love","coding"], k = 2;
console.log(TopKFrequentWords(words,k));