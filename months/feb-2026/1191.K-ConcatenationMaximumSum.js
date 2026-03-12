function kConcatenation(arr){
    let MOD=1e9+7;

    function kadanes(arr){
        let curSum=0;
        let maxSum=0;

        for(let i=0;i<arr.length;i++){
            curSum=Math.max(0,curSum+arr[i]);
            maxSum=Math.max(curSum,maxSum);
        }
        return maxSum;
    }

    let total=arr.reduce((a,b)=>a+b,0);

    if(k===1){
        return kadanes(arr)%MOD;
    }

    let doubleMax=arr.concat(arr);
    let maxDouble=kadanes(doubleMax);

    if(total>0){
        return (maxDouble+(k-2)*total)%MOD;
    }
    else{
        return maxDouble%MOD;
    }
}

let arr = [1,2], k = 3;
console.log(kConcatenation(arr,k));
