import { Customer } from "../customer/Customer";

export type CallRecord = {
  callDuration: number | null;
  callTimestamp: Date | null;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  recordingUrl: string | null;
  updatedAt: Date;
};
