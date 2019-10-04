// 문제 유형: DP(동적 프로그래밍)
// 문제 해법
// - 첫 번째 스티커를 뜯을 때와 안 뜯을 때를 구분하여 수행
// - mem[i]는 i번 째 스티커를 뜯는 경우
// - mem[i-2]+ sticker[i]와 mem[i-1]을 비교하여 해당 스티커 까지의 최대값을 메모이제이션함
// 문제 점화식 : mem[i] = max (mem[i-1], mem[i-2]+ sticker[i]);
// 문제 피드백
// - DP문제는 점화식을 써서 풀어야한다는 점을 기억해두자.

const solution = (sticker) => {
	let answer;
	const mem = [];
	const size = sticker.length;
	if (size <= 3) return Math.max(...sticker);
	mem[0] = sticker[0];
	mem[1] = sticker[0];
	for (let i = 2; i < size - 1; i++) {
		mem[i] = Math.max(mem[i - 2] + sticker[i], mem[i - 1]);
	}
	answer = mem[size - 2];

	for (let i = 0; i < size; i++) {
		mem[i] = 0;
	}
	mem[0] = 0;
	mem[1] = sticker[1];

	for (let i = 2; i < size; i++) {
		mem[i] = Math.max(mem[i - 2] + sticker[i], mem[i - 1]);
	}

	answer = Math.max(mem[size - 1], answer);
	return answer;
};

console.log(solution([ 14, 6, 5, 11, 3, 9, 2, 10 ]));
