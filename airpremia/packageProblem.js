const partition = (array, left, right, pivotIndex) => {
	let temp;
	const pivot = array[pivotIndex];
	while (left <= right) {
		while (array[left] < pivot) {
			left++;
		}

		while (array[right] > pivot) {
			right--;
		}

		if (left <= right) {
			temp = array[left];
			array[left] = array[right];
			array[right] = temp;
			left++;
			right--;
		}
	}

	temp = array[left];
	array[left] = array[pivotIndex];
	array[pivotIndex] = temp;
	return left;
};

const quickSort = (array, left, right) => {
	if (!left) left = 0;
	if (!right) right = array.length - 1;
	let pivotIndex = right;
	pivotIndex = partition(array, left, right - 1, pivotIndex);
	if (left < pivotIndex - 1) {
		quickSort(array, left, pivotIndex - 1);
	}
	if (pivotIndex + 1 < right) {
		quickSort(array, pivotIndex + 1, right);
	}
	return array;
};

const solution = (goods, boxes) => {
	const mem = [];
	let answer = 0;
	for (let i = 0; i <= goods.length; i++) {
		mem[i] = [];
	}
	const box = quickSort(boxes);
	const good = quickSort(goods);
	for (let i = 0; i <= goods.length; i++) {
		for (let j = 0; j <= box.length; j++) {
			if (i === 0 || j === 0) mem[i][j] = 0;
			else {
				const goodSize = good[i - 1];
				const boxSize = box[j - 1];
				if (goodSize <= boxSize) {
					mem[i][j] = Math.max(mem[i - 1][j - 1] + 1, mem[i][j - 1]);
				} else {
					mem[i][j] = mem[i][j - 1];
				}
			}
		}
	}
	answer = mem[goods.length][boxes.length];
	return answer;
};

const result = solution([ 5, 3, 7 ], [ 3, 7, 6 ], 3);
console.log(result);
