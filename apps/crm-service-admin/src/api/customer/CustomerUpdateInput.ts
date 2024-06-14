import { CallRecordUpdateManyWithoutCustomersInput } from "./CallRecordUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: string | null;
  callRecords?: CallRecordUpdateManyWithoutCustomersInput;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
};
