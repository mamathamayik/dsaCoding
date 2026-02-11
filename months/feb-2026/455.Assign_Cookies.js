

function AssignCookies(g,s){
    let i=0,j=0;
    let countChildren=0;
    while(i<g.length && j<s.length){
        if(s[j]>=g[i]){
            countChildren++;
            i++;
        }
        j++;
    }
    return countChildren;
}

let g=[1,2,3], s = [1,1];
console.log(AssignCookies(g,s));
