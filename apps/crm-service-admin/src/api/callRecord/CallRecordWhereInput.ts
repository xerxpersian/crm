import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CallRecordWhereInput = {
  callDuration?: IntNullableFilter;
  callTimestamp?: DateTimeNullableFilter;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  recordingUrl?: StringNullableFilter;
};
