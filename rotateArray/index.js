const Rotate = (src, m, n, b) => {
	// 반시계 방향 회전 테이블
	const direction = [ [ 1, 0 ], [ 0, 1 ], [ -1, 0 ], [ 0, -1 ] ];
	let currentX = b;
	let currentY = b;
	let mem = src[currentX][currentY];
	for (let i = 0; i < direction.length; i++) {
		if (direction[i][0] === 1 || direction[i][0] === -1) {
			for (let j = 0; j < m - 1; j++) {
				let temp;
				currentX += direction[i][0];
				currentY += direction[i][1];
				temp = src[currentX][currentY];
				src[currentX][currentY] = mem;
				mem = temp;
			}
		} else if (direction[i][1] === 1 || direction[i][1] === -1) {
			for (let k = 0; k < n - 1; k++) {
				let temp;
				currentX += direction[i][0];
				currentY += direction[i][1];
				temp = src[currentX][currentY];
				src[currentX][currentY] = mem;
				mem = temp;
			}
		}
	}
};

const RotateArray = (src, m, n, r, b) => {
	if (m <= 0 || n <= 0) return;
	for (let i = 0; i < r; i++) {
		Rotate(src, m, n, b);
	}
	RotateArray(src, m - 2, n - 2, r, b + 1);
	return src;
};

const test = [ [ 2, 2, 2 ], [ 2, 1 ], [ 5, 6 ] ];
const m = test[0][0];
const n = test[0][1];
const r = test[0][2];
const src = test.slice(1, test.length);

console.log(src.join('\n'), '\n');
const result = RotateArray(src, m, n, r, 0);
result.map((el) => el.join(' '));
console.log(result.join('\n'));
