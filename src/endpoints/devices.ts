import type {
	Device,
	DeviceQueue,
	EigerClient,
	ListDevicesData,
	QueuedPrintJobView,
} from "../index.js"

export function devices(
	this: EigerClient,
	pageNumber: number = 1,
	pageSize: number = 100
) {
	const url = `${this.baseUrl}/devices?page[number]=${pageNumber}&page[size]=${pageSize}`
	return this.get<ListDevicesData>(url)
}

export function device(this: EigerClient, id: string) {
	const url = `${this.baseUrl}/devices/${id}`
	return this.get<Device>(url)
}

export function deviceQueue(this: EigerClient, id: string) {
	const url = `${this.baseUrl}/devices/${id}/queue`
	return this.get<DeviceQueue>(url)
}

export function queuedJob(this: EigerClient, deviceId: string, jobId: string) {
	const url = `${this.baseUrl}/devices/${deviceId}/queue/${jobId}`
	return this.get<QueuedPrintJobView>(url)
}
