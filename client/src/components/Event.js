import React from "react";
import {
  List,
  Datagrid,
  TextField,
  RichTextField,
  SelectField,
  SelectInput,
  DateField,
  ReferenceField,
  EditButton,
  Edit,
  SimpleForm,
} from "react-admin";
import EventIcon from "@material-ui/icons/Event";

const priorityChoices = [
    {id: 1, name: "Χαμηλή"},
    {id: 2, name: "Μεσαία"},
    {id: 3, name: "Υψηλή"},
    {id: 4, name: "Πολύ υψηλή"},
];
const statusChoices = [
    { id: 1, name: 'Δημιουργήθηκε' },
    { id: 2, name: 'Υπό διερεύνηση' },
    { id: 3, name: 'Επιλύθηκε' },
];

const EventList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="name" />
        <SelectField source="priority" choices={priorityChoices} />
        <SelectField source="status" choices={statusChoices} />
        <DateField source="updated_at" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

const EventEdit = (props) => {
  return (
    <Edit title="Edit an event" {...props}>
      <EventForm />
    </Edit>
  );
};

const EventForm = (props) => {
  return (
    <SimpleForm {...props}>
      <TextField source="name" fullWidth />
      <RichTextField source="info" fullWidth />
      <SelectField source="priority" choices={priorityChoices} />
      <SelectInput source="status" choices={statusChoices} />
      <DateField source="updated_at" />
      <ReferenceField label="Hardware" source="hardware_id" reference="hardware">
        <TextField source="name" />
    </ReferenceField>
    </SimpleForm>
  );
};

export { EventList, EventEdit, EventIcon };
