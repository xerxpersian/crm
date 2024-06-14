import { CallRecord as TCallRecord } from "../api/callRecord/CallRecord";

export const CALLRECORD_TITLE_FIELD = "recordingUrl";

export const CallRecordTitle = (record: TCallRecord): string => {
  return record.recordingUrl?.toString() || String(record.id);
};
