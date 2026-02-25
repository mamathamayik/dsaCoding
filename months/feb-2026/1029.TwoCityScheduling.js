function TwoCity(costs){
    let total=0;
    let n=costs.length/2;

    for(let i=0;i<n;i++){
        total+=costs[i][0];
    }
    for(let i=n;i<costs.length;i++){
        total+=costs[i][1];
    }
    return total;
}

let costs = [[10,20],[30,200],[400,50],[30,20]];
console.log(TwoCity(costs));
