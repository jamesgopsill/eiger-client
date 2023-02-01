import type { EigerClient, HttpResponse } from "../index.js"

export async function get<T>(
	this: EigerClient,
	url: string,
	bodyArgs: {} = {}
) {
	const config: RequestInit = {
		method: "GET",
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
	const data = await r.json()
	const res: HttpResponse<T> = {
		...r,
		data: data,
	}
	return res
}
