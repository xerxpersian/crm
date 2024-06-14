import { CallRecord } from "../callRecord/CallRecord";

export type Customer = {
  address: string | null;
  callRecords?: Array<CallRecord>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  updatedAt: Date;
};
