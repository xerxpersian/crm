import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type CallRecordCreateInput = {
  callDuration?: number | null;
  callTimestamp?: Date | null;
  customer?: CustomerWhereUniqueInput | null;
  recordingUrl?: string | null;
};
