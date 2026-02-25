function kthLexicographic(n,k){
    let res=[];
    let letters=['a','b','c'];
    function generate(path){
        if(path.length===n){
            res.push(path);
            return;
        }
        for(let ch of letters){
            if(path.length>0 && path[path.length-1]===ch)
                continue;

            generate(path+ch);
        }
    }
    generate('');
    return k<=res.length?res[k-1]:"";
}

console.log(kthLexicographic(1,3));
