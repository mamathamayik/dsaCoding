function NumberOfSubstrings(s){
    let count=[0,0,0];
    let left=0;
    let result = 0;

    for(let right=0;right<s.length;right++){
        count[s.charCodeAt(right)-97]++;

        while(count[0]>0 && count[1]>0 && count[2]>0){
            result+=s.length-right;

            count[s.charCodeAt(left)-97]--;
            left++;
        }
    }
    return result;
}

let s = "abcabc";
console.log(NumberOfSubstrings(s));
