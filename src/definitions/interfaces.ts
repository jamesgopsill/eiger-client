import type * as Enums from "./enums.js"

export interface ErrorMessage {
	message: string
}

export type HttpResponse<T> =
	| ({
			ok: true
			content: T
	  } & Response)
	| ({
			ok: false
			content: undefined
	  } & Response)

export interface BuildView {
	id: string
	title: string
	createdAt: Date | null
	updatedAt: Date | null
	partCount: number
	previewUrl: string
	deviceSeries: string
	primaryMaterial: string
	secondaryMaterial: string
	ccsPrimaryRequired: number | null
	ccsSecondaryRequired: number | null
	ccsTertiaryRequired: number | null
	estimatedPrintSeconds: number | null
	sliced: boolean
	blacksmithEnabled: boolean
	approved: boolean
}

export interface Job {
	id: string
	state: Enums.PrintJobState
	queuedAt: Date | null
	createdAt: Date | null
	startedAt: Date | null
	updatedAt: Date | null
	endedAt: Date | null
	printingState: Enums.PrintingState
	currentLayer: number | null
	layerCount: number | null
	progress: number | null
	estimatedSecondsRemaining: number | null
	build: BuildView
}

export interface Device {
	id: string
	name: string
	deviceType: string
	deviceSeries: string
	createdAt: Date | null
	updatedAt: Date | null
	queueEstimatedTimeSeconds: number | null
	queueLength: number | null
	loadedPrimaryMaterial: string | null
	ccsPrimaryRemaining: number | null
	ccsSecondaryRemaining: number | null
	state: Enums.PrinterState
	activeJob: Job
}

export interface ListDevicesData {
	hasMoreItems: boolean
	items: Device[]
}

export interface ListBuildsData {
	hasMoreItems: boolean
	items: BuildView[]
}

export interface Build {
	id: string
	title: string
	createdAt: Date | null
	updatedAt: Date | null
	partCount: number
	previewUrl: string
	deviceSeries: string
	primaryMaterial: string
	secondaryMaterial: string
	ccsPrimaryRequired: number | null
	ccsSecondaryRemaining: number | null
	ccsTertiaryRemaining: number | null
	estimatedPrintSeconds: number | null
	sliced: boolean
	blacksmithEnabled: boolean
	approved: boolean | null
	partVersions: PartVersionView[]
	poses: PoseView[]
}

export interface PartVersionView {
	id: string
	partId: string
	title: string
	description: string | null
	versionNumber: number
	previewUrl: string
	sliced: boolean
	deviceSeries: string
	primaryMaterial: string
	secondaryMaterial: string
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
	queuedAt: Date | null
	updatedAt: Date | null
	build: BuildView
}

export interface DeviceQueue {
	device: Device
	queue: QueuedPrintJobViewExtended[]
}

export interface QueuedPrintJobView {
	id: string
	state: Enums.QueuedPrintJobState
	queuedAt: Date | null
	updatedAt: Date | null
	build: BuildView
}

export interface Part {
	id: string
	createdAt: Date | null
	updatedAt: Date | null
	clonedFrom: string | null
	latestPartVersion: string | null
	partVersions: string[]
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
	partId: string
	title: string
	description: string | null
	versionNumber: number
	previewUrl: string
	sliced: boolean
	deviceSeries: string
	primaryMaterial: string
	secondaryMaterial: string
	settings: Settings
}

export interface PrintedPartViewExtended {
	id: string
	state: Enums.PrintedPartViewState
	notes: string | null
	printedAt: Date | null
	updatedAt: Date | null
	printJob: {
		id: string
		state: Enums.PrintJobState
		queuedAt: Date | null
		createdAt: Date | null
		startedAt: Date | null
		updatedAt: Date | null
		endedAt: Date | null
		build: BuildView
	}
}

export interface PrintedPartsData {
	hasMoreItems: boolean
	items: PrintedPartViewExtended
}

export interface DeviceView {
	id: string
	name: string
	deviceType: string
	deviceSeries: string
	createdAt: Date | null
	updatedAt: Date | null
	queueEstimatedTimeSeconds: number | null
	queueLength: number | null
	loadedPrimaryMaterial: string | null
	ccsPrimaryRemaining: number | null
	ccsSecondaryRemaining: number | null
	state: Enums.PrinterState
}

export interface PrintJobViewExtended {
	id: string
	state: Enums.PrintJobState
	queuedAt: Date | null
	createdAt: Date | null
	startedAt: Date | null
	updatedAt: Date | null
	endedAt: Date | null
	printingState: Enums.PrintingState
	currentLayer: number | null
	layerCount: number | null
	progress: number | null
	estimatedSecondsRemaining: number | null
	build: BuildView
	device: DeviceView
}

export interface PrintJobsData {
	hasMoreItems: boolean
	items: PrintJobViewExtended[]
}

export interface ScanReport {
	printedPartId: string
	scanErportUrl: string | null
}

export interface BacklogResponse {
	id: string
	state: Enums.PrintJobState
	queuedAt: Date | null
	createdAt: Date | null
	startedAt: Date | null
	updatedAt: Date | null
	endedAt: Date | null
}

export interface AddToBuildQueueResponse {
	id: string
	state: Enums.QueuedPrintJobState
	queuedAt: Date | null
	updatedAt: Date | null
}
