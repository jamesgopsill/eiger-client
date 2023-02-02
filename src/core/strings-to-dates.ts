const keys = ["queuedAt", "createdAt", "startedAt", "updatedAt", "endedAt"]

export const stringsToDates = (obj: any) => {
	Object.keys(obj).forEach((key) => {
		// If the object is a number and it has a length of 13 then consider it as a date

		if (typeof obj[key] == "number") {
			//if (obj[key].toString().length == 13) {
			if (keys.includes(key)) {
				// Replace value with date object
				obj[key] = new Date(Date.parse(obj[key]))
			}
		}

		// If it is an array then iterate through the objects and perform the recursive process objects
		if (typeof obj[key] == "object" && Array.isArray(obj[key])) {
			for (const el of obj[key]) {
				// console.log(el)
				stringsToDates(el)
			}
		}
		// if it is an object then process it
		if (typeof obj[key] == "object" && Array.isArray(obj[key]) == false) {
			stringsToDates(obj[key])
		}
	})
}
