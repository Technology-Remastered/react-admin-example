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
    <List title='Συμβάντα' {...props}>
      <Datagrid>
        <TextField label='Όνομα' source="name" />
        <SelectField label='Προτεραιότητα' source="priority" choices={priorityChoices} />
        <SelectField label='Κατάσταση' source="status" choices={statusChoices} />
        <DateField label='Ενημερώθηκε στις' source="updated_at" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

const EventEdit = (props) => {
  return (
    <Edit title="Επεξεργασία συμβάντος" {...props}>
      <EventForm />
    </Edit>
  );
};

const EventForm = (props) => {
  return (
    <SimpleForm {...props}>
      <TextField label='Όνομα' source="name" fullWidth />
      <RichTextField label='Πληροφορίες' source="info" fullWidth />
      <SelectField label='Προτεραιότητα' source="priority" choices={priorityChoices} />
      <SelectInput label='Κατάσταση' source="status" choices={statusChoices} />
      <DateField label='Ενημερώθηκε στις' source="updated_at" />
      <ReferenceField label="Υλικό" source="hardware_id" reference="hardware">
        <TextField source="name" />
      </ReferenceField>
    </SimpleForm>
  );
};

export { EventList, EventEdit, EventIcon };
