const solution = (vote) => {
	const voteMap = new Map();
	const voteArray = vote.split('');
	voteMap.set('A', 0);
	voteMap.set('B', 0);
	voteMap.set('C', 0);
	for (let i = 0; i < voteArray.length; i++) {
		const data = voteArray[i];
		voteMap.set(data, voteMap.get(data) + 1);
	}
	const aVote = voteMap.get('A');
	const bVote = voteMap.get('B');
	const cVote = voteMap.get('C');
	console.log(aVote, bVote, cVote);
	if (cVote >= voteArray.length / 2) return 'C';
	if (aVote > bVote) return 'A';
	else if (aVote < bVote) return 'B';
	else if (aVote === bVote) return 'AB';
};

const result = solution('AAAACCCCC');
console.log(result);
