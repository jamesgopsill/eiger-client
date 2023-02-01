import type { EigerClient } from "../index.js"

export function ping(this: EigerClient) {
	return "pong"
}
