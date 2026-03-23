function removeDuplicateLetters(s) {
    let freq=new Map();

    for(let ch of s){
        freq.set(ch,(freq.get(ch)||0)+1);
    }

    let seen=new Set();
    let stack=[];

    for(let ch of s){

        freq.set(ch,freq.get(ch)-1);

        if(seen.has(ch))
            continue;

        while(stack.length && ch <stack[stack.length-1] && freq.get(stack[stack.length-1])>0){
            seen.delete(stack.pop());
        }

        stack.push(ch);
        seen.add(ch);
    }
    return stack.join("");
}

let s = "cbacdcbc";
console.log(removeDuplicateLetters(s));
