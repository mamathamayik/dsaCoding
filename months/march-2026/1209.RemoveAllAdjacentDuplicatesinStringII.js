function RemoveDuplicates(s, k) {
    let stack=[];

    for(let char of s){
        if(stack.length && stack[stack.length-1][0]===char){
            stack[stack.length-1][1]++;
        }

        else{
            stack.push([char,1]);
        }

        if(stack[stack.length-1][1]===k)
        {
            stack.pop();
        }
    }
    let res="";

    for(let [char,count] of stack){
        res+=char.repeat(count);
    }
    return res;
}

let s = "abcd", k = 2;
console.log(RemoveDuplicates(s,k));
