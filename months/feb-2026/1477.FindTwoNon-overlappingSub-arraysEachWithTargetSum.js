function NonOverlappingSubarray(arr,target){
    let left=0;
    let leftMin=new Array(arr.length).fill(Infinity);
    let sum=0;
    let minLen=Infinity;
    let result=Infinity;

    for(let right=0;right<arr.length;right++){
        sum+=arr[right];

        while(sum>target){
            sum-=arr[left];
            left++;
        }

        if(sum===target){
            let curLen=right-left+1;

            if(left>0 && leftMin[left-1]!==Infinity){
                result = Math.min(result,curLen+leftMin[left-1]);
            }

            minLen=Math.min(curLen,minLen);
        }
        leftMin[right]=minLen;
    }
    return result===Infinity?-1:result;
}

let arr = [7,3,4,7], target = 7;
console.log(NonOverlappingSubarray(arr,target));
