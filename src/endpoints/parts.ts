import type {
	EigerClient,
	Part,
	PrintedPartsData,
	PrintedPartViewExtended,
} from "../index.js"

export async function part(this: EigerClient, id: string) {
	const url = `${this.baseUrl}/part/${id}`
	return this._get<Part>(url)
}

export async function partVersion(this: EigerClient, id: string) {
	const url = `${this.baseUrl}/part_versions/${id}`
	return this._get<Part>(url)
}

export async function partVersionDownloadUrl(this: EigerClient, id: string) {
	const url = `${this.baseUrl}/part_versions/${id}/download`
	return this._get<{ url: string }>(url)
}

export async function printedParts(
	this: EigerClient,
	pageNumber: number = 1,
	pageSize: number = 100
) {
	const url = `${this.baseUrl}/printed_parts?page[number]=${pageNumber}&page[size]=${pageSize}`
	return this._get<PrintedPartsData>(url)
}

export async function printedPart(this: EigerClient, id: string) {
	const url = `${this.baseUrl}/printed_parts/${id}`
	return this._get<PrintedPartViewExtended>(url)
}
