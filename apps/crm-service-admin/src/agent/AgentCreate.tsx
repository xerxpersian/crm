import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AgentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="fullName" source="fullName" />
        <TextInput label="phoneNumber" source="phoneNumber" />
      </SimpleForm>
    </Create>
  );
};
