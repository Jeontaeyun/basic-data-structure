/*
그리들 알고리즘의 근사값을 찾아가는 과정이라면
동적 프로그래밍(DP)는 최적값을 찾아가는 과정입니다.
주로 다중 배열을 통해서 DP문제를 해결합니다. 
Longest Common Sequence(LCS)는 두 문자열에서 순서대로 겹치는 문자가 최대 몇개인지 구하는 문제
01. ABCBDAB와 BDCABA에서 LCS는 BCAB나 BDAB나 BCBA입니다

다음과 같은 점화식을 가집니다.lcs(i,j) = lcs(i-1,j-1) + 1(마지막 문자열이 같을 때);
                       lcs(i,j) = max(lcs(i-1,j),lcs(i,j-1)); (마지막 문자열이 다를 때)

*/
type lcsFunc =  (first: string, second: string) => any ;
const memoiz : number[] = [];
const LCS : lcsFunc = function(first, second){
    let result : number[][] = [];
    const firstLength : number = first.length;
    const secondLength : number = second.length;
    for(let i : number = 0; i <= firstLength ; i++){
        result[i] = []
    }
    // 이중 배열 초기화
    // 모든 값을 비교하는 방법
    // result[i][j]로 된 배열에 각 값들을 저장하여 사용한다.
    // result[0][0] = 0, result[1][0] = 0. result[0][1] = 0, result[1][1] 은 같으면 1 틀리면 0
    // result[1][2] = 마지막 값이 같으면 result[0][1] + 1 마지막 문자열이 다르면 reult[1,1]과 reusult[0][2] 중 큰 값
    // 반복문을 넣어준 문자열 까지 반복하는 이유는, first[i-1] === second[k-1]이기때문에 모든 비교를 하려면
    // length만큼 반복문을 돌려주어야 한다.
    // 이중 배열을 사용하는 법을 익히자. 두 가지 변수로 값이 정해지는 점화식은 이중 배열을 이용하자.
    for(let i : number = 0; i <= firstLength ; i ++){
        for(let k : number = 0; k <= secondLength ; k++){
            if(k === 0 || i === 0){
                result[i][k] = 0;
            // 마지막 값이 같으면, reuslt[i-1][k-1] + 1해준다
            } else if(first[i-1] === second[k-1]){
                result[i][k] = result[i-1][k-1]+1;
            // 마지막 값이 다르면, 둘 중 큰 값을 넣어준다.
            } else {
                result[i][k] = Math.max(result[i-1][k], result[i][k-1]);
            }
        }
    }
    return result[firstLength][secondLength];
}

console.log(LCS('ABCBDAB', 'BDCABA'));