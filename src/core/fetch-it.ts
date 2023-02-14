import { keysToCamel, keysToSnake } from "./format-keys.js"
import type { HttpResponse, ThingiverseClient } from "./index.js"
import { parseDateKeys } from "./parse-date-keys.js"

export async function fetchIt<T>(
	this: ThingiverseClient,
	method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
	url: string,
	params: { [k: string]: any } | undefined = undefined
) {
	let config: any = {
		method,
		mode: "cors",
		headers: {},
	}
	if (this._appToken) {
		url += `?access_token=${this._appToken}`
	}
	if (this._bearerToken) {
		config.headers["Authorization"] = `Bearer ${this._bearerToken}`
	}
	if (typeof params === "object") {
		params = keysToSnake(params)
	}
	if (method === "GET" && typeof params === "object") {
		if (this._apiKey) {
			url += "&"
		} else {
			url += "?"
		}
		for (const [k, v] of Object.entries(params)) {
			url += k + "=" + v + "&"
		}
		url = url.slice(0, -1)
		url = encodeURI(url)
	}
	if (method === "POST" && typeof params === "object") {
		config.headers["Content-Type"] = "application/json"
		config.body = JSON.stringify(params)
	}

	const request = new Request(url, config)

	const r = (await fetch(request)) as HttpResponse<T>
	r.content = undefined
	if (r.ok && r.status === 200) {
		if (r.headers.get("Content-Type")?.includes("application/json")) {
			let content = await r.json()
			content = keysToCamel(content)
			parseDateKeys(content)
			r.content = content
		}
		if (r.headers.get("Content-Type")?.includes("plain/text")) {
			let content = await r.text()
			r.content = content
		}
	}
	return r
}
