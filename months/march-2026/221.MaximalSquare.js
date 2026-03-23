function MaximumSqaure(matrix) {
    let rows = matrix.length;
    let cols=matrix[0].length;

    let dp=Array.from({length:rows},()=>new Array(cols).fill(0));

    let maxSide=0;

    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            if(matrix[i][j]==='1'){
                if(i===0 || j==0){
                    dp[i][j]=1;
                }
                else{
                    dp[i][j]=1+Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]);
                }
                maxSide=Math.max(maxSide,dp[i][j]);
            }
        }
    }
    return maxSide*maxSide;
}

let matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]];
console.log(MaximumSqaure(matrix));
