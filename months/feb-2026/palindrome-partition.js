
function palindromePartition(s){
    let res=[];
    let path=[];

    function isPalindrome(s,start,end){
        while(start<end){
            if(s[start]!==s[end])
                return false;
            left++;
            right--;
        }
        return true;
    }

    function backTrack(start){
        if(start === s.length){
            res.push([...path]);
        }

        for(end=start;end<s.length;end++){
            if(isPalindrome(s,start,end)){
                path.push(s.substring(start,end+1));
                backTrack(end+1);
                path.pop();
            }
        }
    }
    backTrack(0);
    return res;
}

let s="aab";
console.log(palindromePartition(s));
