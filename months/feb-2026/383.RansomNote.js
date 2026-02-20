
function RansomNote(ransomNote,maganize){
    let map=new Map();
    if(maganize.length<ransomNote.length)
        return false;

    for(let i=0;i<maganize.length;i++){
        map.set(maganize[i],(map.get(maganize[i])|0)+1);
    }

    for(let i=0;i<ransomNote.length;i++){
        if(!map.has(ransomNote[i]))
            return false;

        map.set(ransomNote[i],map.get(ransomNote[i])-1);

        if(map.get(ransomNote[i])===0){
            map.delete(ransomNote[i]);
        }
    }
    return true;
}

let ransomNote = "aa", magazine = "ab"
console.log(RansomNote(ransomNote,magazine));
