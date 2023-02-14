import { fetchIt } from "./core/fetch-it.js"
import * as Builds from "./endpoints/builds.js"
import * as Devices from "./endpoints/devices.js"
import * as Parts from "./endpoints/parts.js"
import * as PrintJobs from "./endpoints/print-jobs.js"

export * from "./definitions/enums.js"
export * from "./definitions/interfaces.js"

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
	public ping = () => "pong"
	protected _fetch = fetchIt

	// API specific calls
	public builds = Builds.builds
	public build = Builds.build
	public approvedBuilds = Builds.approvedBuilds
	public sendToBacklog = Builds.sendToBacklog
	public approveBuilds = Builds.approveBuilds
	public disableBuildApprovals = Builds.disableBuildApprovals

	public devices = Devices.devices
	public device = Devices.device
	public deviceQueue = Devices.deviceQueue
	public queuedJob = Devices.queuedJob
	public print = Devices.print
	public addToBuildQueue = Devices.addToBuildQueue
	public removeFromQueue = Devices.removeFromQueue

	public part = Parts.part
	public partVersion = Parts.partVersion
	public partVersionDownloadUrl = Parts.partVersionDownloadUrl
	public printedParts = Parts.printedParts
	public printedPart = Parts.printedPart

	public printJobs = PrintJobs.printJobs
	public printJob = PrintJobs.printJob
	public printJobScanReport = PrintJobs.printJobScanReport
}
