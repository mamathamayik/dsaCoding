function LongestWord(s, dictionary) {

    function isSequence(word,s){
        let i=0,j=0;

        while(i<word.length && j<s.length){
            if(word[i]==s[j]){
                i++;
            }
            j++;
        }
        return i===word.length;
    }

    let res="";

    for(let word of dictionary){
        if(isSequence(word,s)){
            if(word.length>res.length ||(word.length===res.length && word<res)){
                res=word;
            }
        }
    }
    return res;

}

let s = "abpcplea";
let dictionary = ["ale","apple","monkey","plea"];
console.log(LongestWord(s, dictionary));