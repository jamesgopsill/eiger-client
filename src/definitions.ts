import type * as Enums from "./enums.js"

export interface ErrorMessage {
	message: string
}

export type HttpResponse<T> =
	| ({
			ok: true
			data: T
	  } & Response)
	| ({
			ok: false
			data: ErrorMessage
	  } & Response)

export interface BuildView {
	id: string
	title: string
	created_at: string | null
	updated_at: string | null
	part_count: number
	preview_url: string
	device_series: string
	primary_material: string
	secondary_material: string
	ccs_primary_required: number | null
	ccs_secondary_required: number | null
	ccs_tertiary_required: number | null
	estimated_print_seconds: number | null
	sliced: boolean
	blacksmith_enabled: boolean
	approved: boolean
}

export interface Job {
	id: string
	state: Enums.PrintJobState
	queued_at: string | null
	created_at: string | null
	started_at: string | null
	updated_at: string | null
	ended_at: string | null
	printing_state: Enums.PrintingState
	current_layer: number | null
	layer_count: number | null
	progress: number | null
	estimated_seconds_remaining: number | null
	build: BuildView
}

export interface Device {
	id: string
	name: string
	device_type: string
	device_series: string
	created_at: string | null
	updated_at: string | null
	queue_estimated_time_seconds: number | null
	queue_length: number | null
	loaded_primary_material: string | null
	ccs_primary_remaining: number | null
	ccs_secondary_remaining: number | null
	state: Enums.PrinterState
	active_job: Job
}

export interface ListDevicesData {
	has_more_items: boolean
	items: Device[]
}

export interface ListBuildsData {
	has_more_items: boolean
	items: BuildView[]
}

export interface Build {
	id: string
	title: string
	created_at: string | null
	updated_at: string | null
	part_count: number
	preview_url: string
	device_series: string
	primary_material: string
	secondary_material: string
	ccs_primary_required: number | null
	ccs_secondary_remaining: number | null
	ccs_tertiary_remaining: number | null
	estimated_print_seconds: number | null
	sliced: boolean
	blacksmith_enabled: boolean
	approved: boolean | null
	part_versions: PartVersionView[]
	poses: PoseView[]
}

export interface PartVersionView {
	id: string
	part_id: string
	title: string
	description: string | null
	version_number: number
	preview_url: string
	sliced: boolean
	device_series: string
	primary_material: string
	secondary_material: string
	settings: Settings
}

export interface PoseView {
	id: string
	x: number
	y: number
	theta: number
}

export interface QueuedPrintJobViewExtended {
	id: string
	state: Enums.QueuedPrintJobState
	queued_at: string | null
	updated_at: string | null
	build: BuildView
}

export interface DeviceQueue {
	device: Device
	queue: QueuedPrintJobViewExtended[]
}

export interface QueuedPrintJobView {
	id: string
	state: Enums.QueuedPrintJobState
	queued_at: string | null
	updated_at: string | null
	build: BuildView
}

export interface Part {
	id: string
	created_at: string | null
	updated_at: string | null
	cloned_from: string | null
	latest_partversion: string | null
	part_versions: string[]
}

export interface Settings {
	scale: number
	euler: {
		x: number
		y: number
		z: number
	}
	units: string
}

export interface PartVersion {
	id: string
	part_id: string
	title: string
	description: string | null
	version_number: number
	preview_url: string
	sliced: boolean
	device_series: string
	primary_material: string
	secondary_material: string
	settings: Settings
}

export interface PrintedPartViewExtended {
	id: string
	state: Enums.PrintedPartViewState
	notes: string | null
	printed_at: string | null
	updated_at: string | null
	print_job: {
		id: string
		state: Enums.PrintJobState
		queued_at: string | null
		created_at: string | null
		started_at: string | null
		updated_at: string | null
		ended_at: string | null
		build: BuildView
	}
}

export interface PrintedPartsData {
	has_more_items: boolean
	items: PrintedPartViewExtended
}

export interface DeviceView {
	id: string
	name: string
	device_type: string
	device_series: string
	created_at: string | null
	updated_at: string | null
	queue_estimated_time_seconds: number | null
	queue_length: number | null
	loaded_primary_material: string | null
	ccs_primary_remaining: number | null
	ccs_secondary_remaining: number | null
	state: Enums.PrinterState
}

export interface PrintJobViewExtended {
	id: string
	state: Enums.PrintJobState
	queued_at: string | null
	created_at: string | null
	started_at: string | null
	updated_at: string | null
	ended_at: string | null
	printing_state: Enums.PrintingState
	current_layer: number | null
	layer_count: number | null
	progress: number | null
	estimated_seconds_remaining: number | null
	build: BuildView
	device: DeviceView
}

export interface PrintJobsData {
	has_more_items: boolean
	items: PrintJobViewExtended[]
}

export interface ScanReport {
	printed_part_id: string
	scan_erport_url: string | null
}
