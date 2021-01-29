const pi :number[] = [0,1,5,8,9,10,17,17,20,24,30];
let memo : number[] = [];
const maxPi : (number) => number = function(n){
    if(n===0) return 0;
    const valueList : number[] = [];
    for(let i:number = 1 ; i<=n ; i++){
        valueList.push((memo[n-i]||maxPi(n-i))+pi[i]);
    }
    console.log("hi");
    memo[n]=Math.max(...valueList);
    return memo[n];
}

console.log(maxPi(5));