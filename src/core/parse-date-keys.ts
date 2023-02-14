const keys: string[] = [
	"queuedAt",
	"createdAt",
	"startedAt",
	"updatedAt",
	"endedAt",
]

export const parseDateKeys = (obj: any) => {
	Object.keys(obj).forEach((key) => {
		// If a key is a Date key
		if (keys.includes(key)) {
			// Replace value with date object
			obj[key] = new Date(Date.parse(obj[key]))
		}
		// If it is an array then iterate through the objects and perform the recursive process objects
		if (typeof obj[key] == "object" && Array.isArray(obj[key])) {
			for (const el of obj[key]) {
				// console.log(el)
				parseDateKeys(el)
			}
		}
		// if it is an object then process it
		if (typeof obj[key] == "object" && Array.isArray(obj[key]) == false) {
			parseDateKeys(obj[key])
		}
	})
}
