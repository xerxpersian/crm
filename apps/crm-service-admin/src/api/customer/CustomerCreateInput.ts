import { CallRecordCreateNestedManyWithoutCustomersInput } from "./CallRecordCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address?: string | null;
  callRecords?: CallRecordCreateNestedManyWithoutCustomersInput;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
};
