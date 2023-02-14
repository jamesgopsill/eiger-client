import type {
	EigerClient,
	PrintJobsData,
	PrintJobViewExtended,
	ScanReport,
} from "../index.js"

export async function printJobs(
	this: EigerClient,
	pageNumber: number = 1,
	pageSize: number = 100
) {
	const url = `${this.baseUrl}/printed_jobs`
	const params = {
		"page[number]": pageNumber,
		"page[size]": pageSize,
	}
	return this._fetch<PrintJobsData>("GET", url, params)
}

export async function printJob(this: EigerClient, id: string) {
	const url = `${this.baseUrl}/printed_jobs/${id}`
	return this._fetch<PrintJobViewExtended>("GET", url)
}

export async function printJobScanReport(this: EigerClient, id: string) {
	const url = `${this.baseUrl}/printed_jobs/${id}/scan_report`
	return this._fetch<ScanReport>("GET", url)
}
