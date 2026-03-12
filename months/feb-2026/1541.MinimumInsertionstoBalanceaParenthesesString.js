function minimumInsertionToBalance(s){
    let open=0;
    let insertions=0;

    for(let i=0;i<s.length;i++){
        if(s[i]==='('){
            open++;
        }
        else{
            if(i+1<s.length&&s[i+1]===')'){
                i++;
            }
            else{
                insertions++;
            }

            if(open>0){
                open--;
            }
            else{
                insertions++;
            }
        }
    }
    insertions+=open*2;
    return insertions;
}
console.log(minimumInsertionToBalance("))())("));
