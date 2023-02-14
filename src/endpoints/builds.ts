import type {
	BacklogResponse,
	Build,
	EigerClient,
	ListBuildsData,
} from "../index.js"

export async function builds(
	this: EigerClient,
	pageNumber: number = 1,
	pageSize: number = 100
) {
	const url = `${this.baseUrl}/builds`
	const params = {
		"page[number]": pageNumber,
		"page[size]": pageSize,
	}
	return this._fetch<ListBuildsData>("GET", url, params)
}

export async function build(this: EigerClient, id: string) {
	const url = `${this.baseUrl}/builds/${id}`
	return this._fetch<Build>("GET", url)
}

export async function approvedBuilds(
	this: EigerClient,
	pageNumber: number = 1,
	pageSize: number = 100
) {
	const url = `${this.baseUrl}/builds/approved`
	const params = {
		"page[number]": pageNumber,
		"page[size]": pageSize,
	}
	return this._fetch<ListBuildsData>("GET", url, params)
}

export async function sendToBacklog(
	this: EigerClient,
	id: string,
	dueDate: string
) {
	const url = `${this.baseUrl}/backlog/${id}`
	const params = { dueDate }
	return this._fetch<BacklogResponse>("POST", url, params)
}

export async function approveBuilds(this: EigerClient, buildIds: string[]) {
	const url = `${this.baseUrl}/builds/approved`
	const params = { builds: buildIds }
	return this._fetch("PUT", url, params)
}

export async function disableBuildApprovals(this: EigerClient) {
	const url = `${this.baseUrl}/builds/approved`
	return this._fetch("DELETE", url)
}
