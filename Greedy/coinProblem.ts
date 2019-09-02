/* 
 그리드 알고리즘 : 당장 눈 앞에 보이는 최적의 상황만을 쫓는 알고리즘 

 문제: 지불해야 하는 값이 362원일 때 1원 50원 100원 짜리 동전으로 동전의 수가 가장 적게 지불 하시오
 특성상 동전의 수가 가장 작기 위해서는 큰 단위를 먼저 지불한다.
 즉, 무조건 큰 경우대로, 무조건 작은 경우대로, 무조건 긴 경우대로, 무조건 짧은 경우대로 등으로 극단적으로 문제에
 접근하는 것이 그리디 알고리즘의 특징이다. 
*/

type CoinFunc = (coin: number[], won: number) => number;
const Coin : CoinFunc = (coin,won) => {
    let result : number = 0;
    let rest : number = won;
    let coinList: number[] = coin.sort((a,b)=>b-a);
    for(let i:number =0; i< coinList.length; i++){
        result+=Math.floor(rest/coinList[i]); 
        rest-=Math.floor(rest/coinList[i])*coinList[i];
    }
    return result;
}
const coin : number[] = [1, 10,50, 100];
const won : number = 362;
console.log(Coin(coin, won));

/*
그리드 알고리즘은 해당 알고리즘만을 가지고 최적의 해를 구할 수 없을 때가 있어서
동적 프로그래밍, 정렬 등을 함께 사용하는 경우가 많습니다. 
*/