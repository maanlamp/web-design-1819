export function arraySplit (arr, separator, limit = arr.length) {
	//Implement limit somehow?
	const chunks = [];
	const splitHere = Symbol("Split here");
	const raw = [splitHere, ...arr.map(item => (typeof separator === "function" && separator(item) || separator === item) ? splitHere : item)];

	for (const item of raw) {
		if (item === splitHere) {
			chunks.push([]);
		} else {
			chunks[chunks.length - 1].push(item);
		}
	}

	return chunks;
}