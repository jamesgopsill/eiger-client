import type { Build, EigerClient, ListBuildsData } from "../index.js"

export function builds(
	this: EigerClient,
	pageNumber: number = 1,
	pageSize: number = 100
) {
	const url = `${this.baseUrl}/builds?page[number]=${pageNumber}&page[size]=${pageSize}`
	return this.get<ListBuildsData>(url)
}

export function build(this: EigerClient, id: string) {
	const url = `${this.baseUrl}/builds/${id}`
	return this.get<Build>(url)
}

export function approvedBuilds(
	this: EigerClient,
	pageNumber: number = 1,
	pageSize: number = 100
) {
	const url = `${this.baseUrl}/builds/approved?page[number]=${pageNumber}&page[size]=${pageSize}`
	return this.get<ListBuildsData>(url)
}
