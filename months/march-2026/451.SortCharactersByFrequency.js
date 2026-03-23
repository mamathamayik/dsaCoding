function sortCharactersByFrequency(s) {
    let map = new Map();

    for(let ch of s){
        map.set(ch,(map.get(ch)||0)+1);
    }

    let sorted = new Map([...map.entries()].sort((a,b)=>b[1]-a[1]));

    let result="";

    for(let [key,value] of sorted){
        result+=key.repeat(value);
    }
    return result;
} 

let s = "tree";

console.log(sortCharactersByFrequency(s));
