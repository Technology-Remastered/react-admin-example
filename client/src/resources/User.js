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
    <List title="Χρήστες" {...props}>
      <Datagrid>
        <TextField label='Πλήρες όνομα' source="fullname" />
        <EmailField source="email" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

const UserCreate = (props) => {
  return (
    <Create title="Δημιουργία χρήστη" {...props}>
      <SimpleForm>
        <TextInput label='Όνομα χρήστη' source="username" />
        <PasswordInput label='Κωδικός' source="password" />
        <TextInput label='Πλήρες όνομα' source="fullname" />
        <TextInput source="email" />
        <ReferenceArrayInput
          label='Τμήματα'
          source="division_ids"
          reference="division"
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
    <Edit title="Επεξεργασία χρήστη" {...props}>
      <SimpleForm>
        <TextField label='Όνομα χρήστη' source="username" />
        <TextInput label='Πλήρες όνομα' source="fullname" />
        <TextInput source="email" />
        <ReferenceArrayInput
          label='Τμήματα'
          source="division_ids"
          reference="division"
          fullWidth
        >
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};

export { UserList, UserCreate, UserEdit, UserIcon };
