# Eiger.io Typescript API client

The client has been developed as part of a research programme investigating agent-based manufacturing systems ([Brokering Additive Manufacturing](https://dmf-lab.co.uk/brokering-additive-manufacturing/)). It is isomorphic capable of running on server (Node.js) and client-side (Browser) applications.

## Using the client

To install the package, use:

```
pnpm install @jamesgopsill/eiger-client
```

Use it in your code like so:

**Typescript / Javascript (ESM)**

```typescript
import { EigerClient } from "@jamesgopsill/eiger-client"

// Create a new client.
const client = new EigerClient("ACCESS_KEY", "SECRET_KEY")

const r = await client.devices()
if (r.ok) {
	console.log(r.data)
}
```

**Javascript (CJS)**

```javascript
const { EigerClient } = require("@jamesgopsill/octoprint-client")

// Create a new client.
const client = new EigerClient("ACCESS_KEY", "SECRET_KEY")

const r = await client.devices()
if (r.ok) {
	console.log(r.data)
}
```

## Client Docs

The client documentation have been produced using [TypeDoc](https://typedoc.org/) and can be accessed [here](https://jamesgopsill.github.io/octoprint-client/). More details on the API can be found at [Eiger.io](https://www.eiger.io/developer).

## Contributing

We would love to have additional contributors to the project to help us maintain and add functionality to the project.

## Support the Project

The project has been supported by the [EPSRC-funded Brokering Additive Manufacturing project (EP/V05113X/1)](https://gow.epsrc.ukri.org/NGBOViewGrant.aspx?GrantRef=EP/V05113X/1). More details on the project can be found at the [Design Manufacturing Futures Lab](https://dmf-lab.co.uk/) website.

To donate and provide continued support, please consider sponsoring the [maintainer](https://github.com/sponsors/jamesgopsill).

## References

- [Brokering Additive Manufacturing](https://dmf-lab.co.uk/brokering-additive-manufacturing/)
