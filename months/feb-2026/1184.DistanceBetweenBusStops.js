function DistanceBetween(distance,start,destination){
    let i=start;
    let n=distance.length;
    let sum=0,total=0;

    while(i!==destination){
        sum+=distance[i];
        i=(i+1)%n;
    }

    total=distance.reduce((a,b)=>a+b,0);

    return Math.min(sum,total-sum);
}

let distance = [1,2,3,4], start = 0, destination = 3;
console.log(DistanceBetween(distance,start,destination));
