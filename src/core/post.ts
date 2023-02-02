import type { EigerClient, HttpResponse } from "../index.js"
import { keysToCamel } from "./keys-to-camel.js"
import { stringsToDates } from "./strings-to-dates.js"

export async function post<T>(
	this: EigerClient,
	url: string,
	bodyArgs: {} = {}
) {
	const config: RequestInit = {
		method: "POST",
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			Authorization: `Basic ${this.authToken}`,
		},
		body: JSON.stringify(bodyArgs),
	}
	const request = new Request(url, config)
	const r = (await fetch(request)) as HttpResponse<T>
	let data = await r.json()
	data = keysToCamel(data)
	data = stringsToDates(data)
	r.data = data
	return r
}
