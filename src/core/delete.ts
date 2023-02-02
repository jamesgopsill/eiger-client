import type { EigerClient } from "../index.js"
import { keysToCamel } from "./keys-to-camel.js"
import { stringsToDates } from "./strings-to-dates.js"

export async function del(this: EigerClient, url: string, bodyArgs: {} = {}) {
	const config: RequestInit = {
		method: "DELETE",
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			Authorization: `Basic ${this.authToken}`,
		},
		body: JSON.stringify(bodyArgs),
	}
	const request = new Request(url, config)
	const r = fetch(request)
	return r
}
