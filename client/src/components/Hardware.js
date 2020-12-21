import React from "react";
import {
  List,
  Datagrid,
  TextField,
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
    <List {...props}>
      <Datagrid>
        <TextField source="name" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

const HardwareCreate = (props) => {
  return (
    <Create title="Create a hardware item" {...props}>
      <HardwareForm />
    </Create>
  );
};

const HardwareEdit = (props) => {
  return (
    <Edit title="Edit a hardware item" {...props}>
      <HardwareForm />
    </Edit>
  );
};

const HardwareForm = (props) => {
  return (
    <SimpleForm {...props}>
      <TextInput source="name" fullWidth />
      <ReferenceArrayInput
        source="division_ids"
        reference="division"
        label="Divisions"
        fullWidth
      >
        <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>
      <RichTextInput source="info" />
      <ArrayInput source="instructions">
        <SimpleFormIterator>
          <TextInput source="title" label="Title" />
          <RichTextInput source="body" label="Body" />
        </SimpleFormIterator>
      </ArrayInput>
      <FileInput
        source="manuals"
        label="Related manuals"
        multiple
        accept="application/pdf"
      >
        <FileField source="src" title="title" />
      </FileInput>
      <ImageInput
        source="images"
        label="Related images"
        multiple
        accept="image/*"
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  );
};

export { HardwareList, HardwareCreate, HardwareEdit, HardwareIcon };
