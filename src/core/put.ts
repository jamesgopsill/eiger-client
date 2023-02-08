import type { EigerClient } from "../index.js"

export async function put(this: EigerClient, url: string, bodyArgs: {} = {}) {
	const config: RequestInit = {
		method: "PUT",
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			Authorization: `Basic ${this.authToken}`,
		},
		body: JSON.stringify(bodyArgs),
	}
	const request = new Request(url, config)
	const r = await fetch(request)
	return r
}
