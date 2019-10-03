const rotate = (rotate_text, rotation) => {
	const direction = [ 'right', 'left' ];
	const textArray = rotate_text.split('');
	let pivot = 0;
	if (rotation < 0) {
		rotation = -rotation;
		pivot = 1;
	}
	for (let i = 0; i < rotation; i++) {
		if (direction[pivot] === 'left') {
			textArray.unshift(textArray.pop());
		} else if (direction[pivot] === 'right') {
			textArray.push(textArray.shift());
		}
	}
	return textArray.join('');
};

const crypt = (encrypted_text, key) => {
	const result = [];
	const alpabet = [
		'dummy',
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z'
	];
	for (let i = 0; i < encrypted_text.length; i++) {
		const keyNum = alpabet.indexOf(key[i]);
		let textNum = encrypted_text[i].codePointAt() - keyNum;
		if (textNum < 97) textNum += 26;
		console.log(keyNum, textNum);
		result[i] = String.fromCodePoint(textNum);
	}
	return result.join('');
};

const solution = (encrypted_text, key, rotation) => {
	let answer = '';
	answer = rotate(encrypted_text, rotation);
	console.log(answer);
	answer = crypt(answer, key);
	return answer;
};

const result = solution('qyyigoptvfb', 'abcdefghijk', 3);
console.log(result);
