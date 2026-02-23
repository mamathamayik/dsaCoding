function MinCostClimbingStairs(cost){
    let n=cost.length;
    let dp=new Array(n);

    dp[0]=cost[0];
    dp[1]=cost[1];

    for(let i=2;i<n;i++){
        dp[i]=cost[i]+Math.min(dp[i-1],dp[i-2]);
    }
    return Math.min(dp[n-2],dp[n-1]);
}

console.log(MinCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]));
