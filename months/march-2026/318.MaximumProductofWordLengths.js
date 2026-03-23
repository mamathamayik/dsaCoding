function MaxProduct(words){

    let mask = new Array(words.length).fill(0);

    for(let i=0;i<words.length;i++){
        for(let ch of words[i]){
            mask[i] |=(1<<ch.charCodeAt(0)-97);
        }
    }

    let maxProduct=0;

    for(let i=0;i<words.length;i++){
        for(let j=i+1;j<words.length;j++){
            if((mask[i] & mask[j])===0){
                let prod = words[i].length * words[j].length;
                maxProduct = Math.max(maxProduct,prod);
            }
        }
    }
    return maxProduct;
}

let words = ["abcw","baz","foo","bar","xtfn","abcdef"];

console.log(MaxProduct(words));
