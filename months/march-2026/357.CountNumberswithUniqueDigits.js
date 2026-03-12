function countNumbersWithUniqueDigits(n) {
    if(n===0)
        return 1;

    let product=9;
    let result=10;

    for(let i=2;i<=n;i++){
        product = product *(11-i);
        result+=product;
    }

    return result;

}
console.log(countNumbersWithUniqueDigits(2));
