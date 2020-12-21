import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
  Create,
  Edit,
  SimpleForm,
  TextInput,
  PasswordInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import UserIcon from '@material-ui/icons/People';

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="fullname" />
        <EmailField source="email" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

const UserCreate = (props) => {
  return (
    <Create title="Create a User" {...props}>
      <SimpleForm>
        <TextInput source="username" />
        <PasswordInput source="password" />
        <TextInput source="fullname" />
        <TextInput source="email" />
        <ReferenceArrayInput
          source="division_ids"
          reference="division"
          label="Divisions"
          fullWidth
        >
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};

const UserEdit = (props) => {
  return (
    <Edit title="Edit User" {...props}>
      <SimpleForm>
        <TextField source="username" />
        <TextInput source="fullname" />
        <TextInput source="email" />
        <ReferenceArrayInput
          source="division_ids"
          reference="division"
          label="Divisions"
          fullWidth
        >
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};

export { UserList, UserCreate, UserEdit, UserIcon };
