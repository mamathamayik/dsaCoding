
function nextGreatestLetter(letters,target){
    letters.sort();
    for(let i=0;i<letters.length;i++){
        if(letters[i]>target){
            return letters[i];
        }
    }
    return letters[0];
}

console.log(nextGreatestLetter(["c","f","j"], "a"));
