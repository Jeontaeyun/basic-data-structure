// 문제 유형 :DFS(Depth First Search) 문제
// 문제 해법
// - 각 시작지점을 정해놓고 4 방향을 탐색하며 재귀 한다.
// - 한 지점에는 한 번씩만 가야하니 방문 체크하며 이동
// - 같은 지점에 다시 돌아오면 사이클
// 내 해법의 문제 : 순환 사이클을 고려하지 않음.
// 문제 피드백
// - 경로에 대한 배열을 저장하는 배열을 만들어서 length를 통해 경로의 크기를 반환한다.
// - 해당 경로에 대한 값이 있을 경우 연산을 종료하는 프로세스를 구현한다. 

let path = [];
let maxPath = 0;
const findRoute = (board, row, attribute, prevDirection) => {
	const direction = [ [ 1, 0 ], [ -1, 0 ], [ 0, 1 ], [ 0, -1 ] ];
	const newDirection = direction.filter((dir) => dir[0] !== prevDirection[0] || dir[1] !== prevDirection[1]);
	const isDuplicated = path.filter((el) => el[0] === row && el[1] === attribute).length !== 0;
	if (isDuplicated) {
		maxPath = Math.max(maxPath, path.length);
		path = [];
		return false;
	}
	path.push([ row, attribute ]);
	const prevValue = board[row][attribute];
	for (let i = 0; i < newDirection.length; i++) {
		const nextRow = row + newDirection[i][0];
		const nextAttribute = attribute + newDirection[i][1];
		if (nextRow > 3 || nextAttribute > 3) continue;
		if (nextRow < 0 || nextAttribute < 0) continue;
		const nextValue = board[nextRow][nextAttribute];
		if (prevValue === nextValue) {
			const isFalse = findRoute(board, nextRow, nextAttribute, [ -newDirection[i][0], -newDirection[i][1] ]);
			if (!isFalse) return false;
		} else {
			maxPath = Math.max(maxPath, path.length);
			continue;
		}
	}
	return true;
};

const solution = (board) => {
	let answer;
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			findRoute(board, j, i, 1, []);
		}
	}
	if (answer === 1) return -1;
	console.log(maxPath);
	return answer;
};

solution([ [ 4, 4, 4, 4 ], [ 4, 1, 1, 4 ], [ 4, 1, 1, 4 ], [ 4, 4, 4, 4 ] ]);
