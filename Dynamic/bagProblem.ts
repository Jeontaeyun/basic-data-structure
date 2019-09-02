 type bagFunc = (itme: number[][], weight: number) => number;
 const object : number[][] = [[60,10],[130,20],[140,30]];
 let memoization : number[] = [0];
 /*
 알고리즘 전략 : 이 문제는 막대기 문제랑 같다. 결국 그 전 무게의 최대 가치에 나머지 값들을 더해서 그 중 최댓값을 구하면된다.
 밑에는 물건을 중복적으로 넣을 수 있을 때의 최대 가치다
 */
//  const bagPack : bagFunc = function(item, weight){
//     const bagValue:number[] = [];
//     let firstSequence : number;
//     let lastSequence : number;
//     if(weight<=30){
//         if(weight === 0) return 0;
//         for(let i :number = 1 ; i<= weight/10 ; i++){
//             firstSequence = memoization[(weight-i*10)/10]|| weight-i*10? item.filter(object => object[1] === weight-i*10)[0][0] : 0;
//             lastSequence = memoization[i] || i*10? item.filter(object => object[1] ===  i*10 )[0][0] : 0;
//             bagValue.push(firstSequence+lastSequence);
//         }
//     }else{
//         for(let i :number = 1 ; i< weight/10 ; i++){
//             firstSequence =  memoization[(weight-i*10)/10]||bagPack(item , weight-i*10);
//             lastSequence =  memoization[i] ||bagPack(item, i*10) ;
//             console.log(memoization);
//             bagValue.push(firstSequence+lastSequence);
//         }
//     }
//     const maxValue : number = Math.max(...bagValue);
//     memoization[Math.floor(weight/10)] = maxValue;
//     return maxValue;
//  }

//  console.log(bagPack(object, 60));

/*
 다음은 이중 배열을 이용해서 풀어보는 해석법이다.
 모든 경우의 수를 고려해본다  m[item][weight] 은 item의 개수에서 weight의 무게제한이 있을 때 가장 큰 가치를 말합니다.
 아무 물건도 선택하지 않고 무게가 없을 때 m[0][w] or m[i][0] = 0
 i는 3이 최고치다. w=10이면 m[i][10] = 60
*/
const items : number[][] = [[60,10],[100,20],[120,30]];
const bagProblem : bagFunc = function(items, weight){
    let memo : number[][] = [];
    for(let i : number = 0 ; i <= items.length ; i++){
        memo[i] = [];
    }
    // 이중 배열 초기화
    for(let i: number = 0 ; i<= items.length; i++){
        for(let k:number = 0; k <= weight/10 ; k++){
            if(i===0 || k===0){
                memo[i][k] =0;
            } else if (items[i-1][1] > k*10){
                memo[i][k] = memo[i-1][k];
            } else {
                memo[i][k] = Math.max(memo[i-1][k], memo[i-1][k-items[i-1][1]/10] + items[i-1][0])
            }
        }
    }
    return memo[items.length][(weight/10)];
}
console.log(bagProblem(items, 50));
