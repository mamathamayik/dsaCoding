function minimumNumberofFlips(grid){
    let n=grid.length;
    let m=grid[0].length;

    let rowVhange=0,colChange=0;

    for(let i=0;i<n;i++){
        let left=0,right=m-1;
        while(left<right){
            if(grid[i][left]!==grid[i][right]){
                rowVhange++;
            }
            left++
            right--
        }
    }

    for(let i=0;i<m;i++){
        let top=0,bottom=n-1;
        while(top<bottom){
            if(grid[top][i]!==grid[bottom][i]){
                colChange++;
            }
            top++;
            bottom--;
        }
    }
    return Math.min(colChange,rowVhange);
}

console.log(minimumNumberofFlips( [[1,0,0],[0,0,0],[0,0,1]]));
