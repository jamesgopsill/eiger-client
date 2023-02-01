import { EigerClient } from "../src/index.js"

test(`ping`, async () => {
	const client = new EigerClient("", "")
	expect(client.ping()).toBe("pong")
})
