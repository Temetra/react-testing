function addHashCode(hashcode, value) {
	hashcode = ((hashcode << 5) - hashcode) + value
	return Math.abs(hashcode & hashcode)
}

function stringHashCode(str) {
	let hashcode = 0
	
	if (!str.length) return hashcode
	
	for (let i = 0; i < str.length; i++) {
		hashcode = addHashCode(hashcode, str.charCodeAt(i))
	}
	
	return hashcode
}

function stringArrayHashCode(arr) {
	let reducer = (hashcode, str) => addHashCode(hashcode, stringHashCode(str))
	return arr.reduce(reducer, 1)
}

export { stringHashCode, stringArrayHashCode }