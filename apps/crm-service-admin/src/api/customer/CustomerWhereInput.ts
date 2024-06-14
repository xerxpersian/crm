import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CallRecordListRelationFilter } from "../callRecord/CallRecordListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerWhereInput = {
  address?: StringNullableFilter;
  callRecords?: CallRecordListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
};
