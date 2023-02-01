export enum PrinterState {
	UNKNOWN = "unknown",
	OFFLINE = "Offline",
	DISABLED = "Disabled",
	READY = "Ready",
	PRINTING = "Printing",
	PRINT_FINISHED = "Print Finished",
	CANCELING = "Canceling",
	PRINT_BED_NEESDS_CLEARING = "Print Bed Needs Clearing",
	CONFIGURATION_IN_PROGRESS = "Configuration in Progress",
	PAUSING = "Pausing",
	PRINT_PAUSED = "Print Paused",
	RESUMING_PRINT = "Resuming Print",
	LOW_ON_MATERIAL = "Low on Material",
	OUT_OF_MATERIAL = "Out of Material",
	PURGE_STRIP_REMOVAL_NEEDED = "Purge Strip Removal Needed",
	UPDATE_IN_PROGRESS = "Update in Progress",
	DISLOCATION_ERROR = "Dislocation Error",
	BED_NEEDS_LEVELING = "Bed Needs Leveling",
	INCOMPATIABLE_PRINT_FILE = "Incompatible Print File",
	FIBER_JAM = "Fiber Jam",
	MATERIAL_JAM = "Material Jam",
	VACUUM_NOT_ENGAGED = "Vacuum Not Engaged",
}

export enum PrintJobState {
	COMPLETED = "Completed",
	CANCELED = "Canceled",
	FAILED = "Failed",
	PAUSED = "Paused",
	PRINTING = "Printing",
	BACKLOGGED = "Backlogged",
	UNKNOWN = "Unknown",
}

export enum PrintingState {
	DOWNLOADING = "Downloading",
	HEATING = "Heating",
	PRINTING = "Printing",
	SCANNING = "Scanning",
	COOLING_DOWN = "Cooling Down",
	UNKNOWN = "Unknown",
}
