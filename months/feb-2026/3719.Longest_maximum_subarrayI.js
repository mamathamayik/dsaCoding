
function LongestMaximumSubarry(arr){
    let maxlen=0;
    for(let i=0;i<arr.length;i++){
        let evenCount = new Set();
        let oddCount = new Set()

        for(let j=i;j<arr.length;j++){
            if(arr[j]%2===0){
                evenCount.add(arr[j]);
            }
            else{
                oddCount.add(arr[j]);
            }

            if(evenCount.size === oddCount.size){
                maxlen = Math.max(maxlen,j-i+1);
            }
        }
    }
    return maxlen;
}

console.log(LongestMaximumSubarry([1,2,3,2]));
