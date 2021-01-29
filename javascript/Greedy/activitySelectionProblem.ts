/*
활동 선택 문제
회의실이 하나 밖에 없는데 n개의 팀이 각각 회의하고 싶은 시간을 제출할 때, 두 팀이 회의실을 같이 쓸 수 없기 때문에
서로 겹치지 않는 회의들만 골라서 진행해야 할 때 그 중 최대 몇 개를 선택할 수 있는지 구하는 문제

01. 시작 시간과 끝 시간은 배열로 나타낸다. 
02. 일단 가장 빨리 끝나는 모임을 정렬을 하고 순차적으로 넣어준다. (탐욕 알고리즘)

TIP. 동적 프로그래밍을 이용할 경우
*/
type activityFunc = (timeTable: number[][]) => number[];
const activitySelection : activityFunc = (timeTable) => {
    const result = [];
    let sortedTitmeTable = timeTable.sort((x,y) => x[2]-y[2]);
    let isNull:boolean = true;
    while(isNull){
        const meetingRoom = sortedTitmeTable.shift();
        isNull = !!meetingRoom;
        if(!isNull) break;
        result.push(meetingRoom);
        sortedTitmeTable = sortedTitmeTable.filter(item => item[1] >= meetingRoom[2]);
    }
    return result;
};
const timeTable : number [][] = [[1,1,3], [2,2,5], [3,4,7], [4,1,8], [5,5,9], [6,8,10], [7,9,11], [8,11,14], [9,13,16]]
console.log(activitySelection(timeTable));

