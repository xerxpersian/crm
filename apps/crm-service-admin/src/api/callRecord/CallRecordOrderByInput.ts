import { SortOrder } from "../../util/SortOrder";

export type CallRecordOrderByInput = {
  callDuration?: SortOrder;
  callTimestamp?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  recordingUrl?: SortOrder;
  updatedAt?: SortOrder;
};
