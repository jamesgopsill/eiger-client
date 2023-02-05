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
	return this._get<ListDevicesData>(url)
}

export async function device(this: EigerClient, id: string) {
	const url = `${this.baseUrl}/devices/${id}`
	return this._get<Device>(url)
}

export async function deviceQueue(this: EigerClient, id: string) {
	const url = `${this.baseUrl}/devices/${id}/queue`
	return this._get<DeviceQueue>(url)
}

export async function queuedJob(
	this: EigerClient,
	deviceId: string,
	jobId: string
) {
	const url = `${this.baseUrl}/devices/${deviceId}/queue/${jobId}`
	return this._get<QueuedPrintJobView>(url)
}

export async function print(
	this: EigerClient,
	deviceId: string,
	buildId: string
) {
	const url = `${this.baseUrl}/devices/${deviceId}`
	const args = {
		build: buildId,
	}
	return this._post<BacklogResponse>(url, args)
}

export async function addToBuildQueue(
	this: EigerClient,
	deviceId: string,
	buildId: string
) {
	const url = `${this.baseUrl}/devices/${deviceId}/queue`
	const args = {
		build: buildId,
	}
	return this._post<any>(url, args)
}

export async function removeFromQueue(
	this: EigerClient,
	deviceId: string,
	queuedId: string
) {
	const url = `${this.baseUrl}/devices/${deviceId}/queue/${queuedId}`
	return this._delete(url)
}
