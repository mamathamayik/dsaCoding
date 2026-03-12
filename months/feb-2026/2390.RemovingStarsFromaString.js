function RemovingStar(s){
    let stack=[];
    for(let ch of s){
        if(ch==='*'){
            stack.pop();
        }
        else{
            stack.push(ch);
        }
    }
    return stack.join("");
}

console.log(RemovingStar("leet**cod*e"));
