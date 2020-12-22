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
    <List title="Τμήματα" {...props}>
      <Datagrid>
        <TextField label="Όνομα" source="name" />
        <ReferenceField label="Μητρικό τμήμα" source="parent_id" reference="division">
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
    <Create title="Δημιουργία τμήματος" {...props}>
      <SimpleForm>
        <TextInput label="Όνομα" source="name" />
        <ReferenceInput label="Μητρικό τμήμα" source="parent_id" reference="division">
            <SelectInput optionText="name" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

const DivisionEdit = (props) => {
    return (
      <Edit title="Επεξεργασία τμήματος" {...props}>
        <SimpleForm>
          <TextInput label="Όνομα" source="name" />
          <ReferenceInput label="Μητρικό τμήμα" source="parent_id" reference="division">
              <SelectInput optionText="name" />
          </ReferenceInput>
        </SimpleForm>
      </Edit>
    );
  };

export { DivisionList, DivisionCreate, DivisionEdit, DivisionIcon };
