import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  DeleteButton,
  Create,
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
  ReferenceInput
} from "react-admin";
import DivisionIcon from '@material-ui/icons/AccountTree';

const DivisionList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="name" />
        <ReferenceField label="Root" source="parent_id" reference="division">
          <TextField source="name" />
        </ReferenceField>
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

const DivisionCreate = (props) => {
  return (
    <Create title="Create a Division" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <ReferenceInput label="Root" source="parent_id" reference="division">
            <SelectInput optionText="name" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

const DivisionEdit = (props) => {
    return (
      <Edit title="Edit a Division" {...props}>
        <SimpleForm>
          <TextInput source="name" />
          <ReferenceInput label="Root" source="parent_id" reference="division">
              <SelectInput optionText="name" />
          </ReferenceInput>
        </SimpleForm>
      </Edit>
    );
  };

export { DivisionList, DivisionCreate, DivisionEdit, DivisionIcon };
