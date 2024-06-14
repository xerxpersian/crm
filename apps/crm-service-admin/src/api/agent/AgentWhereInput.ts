import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AgentWhereInput = {
  email?: StringNullableFilter;
  fullName?: StringNullableFilter;
  id?: StringFilter;
  phoneNumber?: StringNullableFilter;
};
