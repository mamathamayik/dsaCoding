function lexicographicalNumbers(n){
    let result=[];

    function dfs(curr){
        
        if(curr >n)
            return;

        result.push(curr);

        for(let i=0;i<=9;i++){
            let next = curr *10 +i;
            if(next>n)
                return;

            dfs(next);
        }
    }

    for(let i=1;i<=9;i++){
        dfs(i);
    }
    return result;
}

console.log(lexicographicalNumbers(13));
