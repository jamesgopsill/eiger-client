import type { PrinterState, PrintingState, PrintJobState } from "./index.js"

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
	state: PrintJobState
	queued_at: string | null
	created_at: string | null
	started_at: string | null
	updated_at: string | null
	ended_at: string | null
	printing_state: PrintingState
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
	ccs_secondary_remaing: number | null
	state: PrinterState
	active_job: Job
}

export interface ListAllDevicesData {
	has_more_items: boolean
	items: Device[]
}
