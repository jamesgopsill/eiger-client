import { get } from "./core/get.js"
import { ping } from "./core/ping.js"
import { listAllDevices } from "./endpoints/list-all-devices.js"

export * from "./definitions.js"
export * from "./enums.js"

export class EigerClient {
	public readonly baseUrl: string = "https://www.eiger.io/api/v3"
	public readonly accessKey: string = ""
	public readonly secretKey: string = ""
	public readonly authToken: string = ""

	constructor(accessKey: string, secretKey: string) {
		this.accessKey = accessKey
		this.secretKey = secretKey
		this.authToken = btoa(`${this.accessKey}:${this.secretKey}`)
	}

	// Core Functionality
	public ping = ping
	public get = get

	// API specific calls
	public listAllDevices = listAllDevices
}
