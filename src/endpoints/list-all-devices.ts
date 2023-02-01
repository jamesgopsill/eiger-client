import type { EigerClient, ListAllDevicesData } from "../index.js"

export function listAllDevices(this: EigerClient) {
	const url = `${this.baseUrl}/devices`
	return this.get<ListAllDevicesData>(url)
}
