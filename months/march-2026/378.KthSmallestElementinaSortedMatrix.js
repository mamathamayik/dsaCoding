function KthSmallest(matrix, k) {
    let n=matrix.length;
    let left=matrix[0][0];
    let right=matrix[n-1][n-1];

    function countLessEqual(mid){
        let count=0;
        let row=n-1;
        let col=0;

        while(row>=0 && col<n){
            if(matrix[row][col]<=mid){
                count+=row+1;
                col++;
            }
            else{
                row--;
            }
        }
        return count;
    }

    while(left<right){
        let mid = Math.floor((left+right)/2);

        if(countLessEqual(mid)<k){
            left=mid+1;
        }
        else{
            right=mid;
        }
    }
    return left;
}

let matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8;
console.log(KthSmallest(matrix,k));
