import type {
	EigerClient,
	PrintJobsData,
	PrintJobViewExtended,
	ScanReport,
} from "../index.js"

export function printJobs(
	this: EigerClient,
	pageNumber: number = 1,
	pageSize: number = 100
) {
	const url = `${this.baseUrl}/printed_jobs?page[number]=${pageNumber}&page[size]=${pageSize}}`
	return this.get<PrintJobsData>(url)
}

export function printJob(this: EigerClient, id: string) {
	const url = `${this.baseUrl}/printed_jobs/${id}`
	return this.get<PrintJobViewExtended>(url)
}

export function printJobScanReport(this: EigerClient, id: string) {
	const url = `${this.baseUrl}/printed_jobs/${id}/scan_report`
	return this.get<ScanReport>(url)
}
