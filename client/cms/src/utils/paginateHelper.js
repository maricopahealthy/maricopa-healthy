const paginateHelper = (selected, currentState) => {
	let start = selected * 10;
	let end = selected * 10 + 10;
	let newState = [];
	for (var i = start; i < end; i++) {
		if (currentState[i]) {
			newState.push(currentState[i]);
		}
	}
	console.log(newState, 'NEW STATE???');
	return newState;
};

export default paginateHelper;
