import { EigerClient } from "../src/index.js"

test(`ping`, async () => {
	const client = new EigerClient("abc", "def")
	expect(client.ping()).toBe("pong")
})
