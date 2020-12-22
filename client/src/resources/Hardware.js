import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceArrayField,
  SingleFieldList,
  ChipField,
  EditButton,
  DeleteButton,
  Create,
  Edit,
  SimpleForm,
  TextInput,
  ArrayInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SimpleFormIterator,
  FileInput,
  FileField,
  ImageInput,
  ImageField,
} from "react-admin";
import HardwareIcon from "@material-ui/icons/Build";
import RichTextInput from "ra-input-rich-text";

const HardwareList = (props) => {
  return (
    <List title='Υλικά' {...props}>
      <Datagrid>
        <TextField label='Όνομα' source="name" />
        <ReferenceArrayField label="Τμήματα" source="division_ids" reference="division">
          <SingleFieldList>
              <ChipField source="name" />
          </SingleFieldList>
        </ReferenceArrayField>
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

const HardwareCreate = (props) => {
  return (
    <Create title="Δημιουργία υλικού" {...props}>
      <HardwareForm />
    </Create>
  );
};

const HardwareEdit = (props) => {
  return (
    <Edit title="Επεξεργασία υλικού" {...props}>
      <HardwareForm />
    </Edit>
  );
};

const HardwareForm = (props) => {
  return (
    <SimpleForm {...props}>
      <TextInput label='Όνομα' source="name" fullWidth />
      <ReferenceArrayInput
        label='Τμήματα'
        source="division_ids"
        reference="division"
        fullWidth
      >
        <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>
      <RichTextInput label='Πληροφορίες' source="info" />
      <ArrayInput label='Οδηγίες' source="instructions">
        <SimpleFormIterator>
          <TextInput source="title" label="Τίτλος" />
          <RichTextInput source="body" label="Σώμα" />
        </SimpleFormIterator>
      </ArrayInput>
      <FileInput
        source="manuals"
        label="Εγχειρίδια"
        multiple
        accept="application/pdf"
      >
        <FileField source="src" title="Τίτλος" />
      </FileInput>
      <ImageInput
        source="images"
        label="Εικόνες"
        multiple
        accept="image/*"
      >
        <ImageField source="src" title="Τίτλος" />
      </ImageInput>
    </SimpleForm>
  );
};

export { HardwareList, HardwareCreate, HardwareEdit, HardwareIcon };
