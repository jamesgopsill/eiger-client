import type {
	BacklogResponse,
	Device,
	DeviceQueue,
	EigerClient,
	ListDevicesData,
	QueuedPrintJobView,
} from "../index.js"

export async function devices(
	this: EigerClient,
	pageNumber: number = 1,
	pageSize: number = 100
) {
	const url = `${this.baseUrl}/devices?page[number]=${pageNumber}&page[size]=${pageSize}`
	return this._fetch<ListDevicesData>("GET", url)
}

export async function device(this: EigerClient, id: string) {
	const url = `${this.baseUrl}/devices/${id}`
	return this._fetch<Device>("GET", url)
}

export async function deviceQueue(this: EigerClient, id: string) {
	const url = `${this.baseUrl}/devices/${id}/queue`
	return this._fetch<DeviceQueue>("GET", url)
}

export async function queuedJob(
	this: EigerClient,
	deviceId: string,
	jobId: string
) {
	const url = `${this.baseUrl}/devices/${deviceId}/queue/${jobId}`
	return this._fetch<QueuedPrintJobView>("GET", url)
}

export async function print(
	this: EigerClient,
	deviceId: string,
	buildId: string
) {
	const url = `${this.baseUrl}/devices/${deviceId}`
	const params = {
		build: buildId,
	}
	return this._fetch<BacklogResponse>("POST", url, params)
}

export async function addToBuildQueue(
	this: EigerClient,
	deviceId: string,
	buildId: string
) {
	const url = `${this.baseUrl}/devices/${deviceId}/queue`
	const params = {
		build: buildId,
	}
	return this._fetch<unknown>("POST", url, params)
}

export async function removeFromQueue(
	this: EigerClient,
	deviceId: string,
	queuedId: string
) {
	const url = `${this.baseUrl}/devices/${deviceId}/queue/${queuedId}`
	return this._fetch("DELETE", url)
}
