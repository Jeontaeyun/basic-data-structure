 type bagFunc = (itme: number[][], weight: number) => number;
 const object : number[][] = [[60,10],[130,20],[140,30]];
 let memoization : number[] = [0];
 /*
 알고리즘 전략 : 이 문제는 막대기 문제랑 같다. 결국 그 전 무게의 최대 가치에 나머지 값들을 더해서 그 중 최댓값을 구하면된다.
 밑에는 물건을 중복적으로 넣을 수 있을 때의 최대 가치다
 */
 const bagPack : bagFunc = function(item, weight){
    const bagValue:number[] = [];
    let firstSequence : number;
    let lastSequence : number;
    if(weight<=30){
        if(weight === 0) return 0;
        for(let i :number = 1 ; i<= weight/10 ; i++){
            firstSequence = memoization[(weight-i*10)/10]|| weight-i*10? item.filter(object => object[1] === weight-i*10)[0][0] : 0;
            lastSequence = memoization[i] || i*10? item.filter(object => object[1] ===  i*10 )[0][0] : 0;
            bagValue.push(firstSequence+lastSequence);
        }
    }else{
        for(let i :number = 1 ; i< weight/10 ; i++){
            firstSequence =  memoization[(weight-i*10)/10]||bagPack(item , weight-i*10);
            lastSequence =  memoization[i] ||bagPack(item, i*10) ;
            console.log(memoization);
            bagValue.push(firstSequence+lastSequence);
        }
    }
    const maxValue : number = Math.max(...bagValue);
    memoization[Math.floor(weight/10)] = maxValue;
    return maxValue;
 }

 console.log(bagPack(object, 60));

 