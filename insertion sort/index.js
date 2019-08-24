const insertion = [5,7,1,2,3,4,5,8,0];    //데이터 9개

for(let i = 0 ; i < insertion.length ; i++){
	if(i === 0) continue;
	for(let j = i-1 ; j >= 0 ; j--){
		if(insertion[j+1] < insertion[j]){
            const cache = insertion[j+1];
            insertion[j+1] = insertion[j];
            insertion[j] =cache;
        }
	}
}

console.log(insertion);

