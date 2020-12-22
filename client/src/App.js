// React admin
import React from 'react';
import { Admin, Resource } from 'react-admin';

// Providers
import dataProvider from './providers/dataProvider';
import authProvider from './providers/authProvider';
import i18nProvider from './providers/i18nProvider';

// Resources
import { UserList, UserCreate, UserEdit, UserIcon } from './resources/User';
import { DivisionList, DivisionCreate, DivisionEdit, DivisionIcon } from './resources/Division';
import { HardwareList, HardwareCreate, HardwareEdit, HardwareIcon } from './resources/Hardware';
import { EventList, EventEdit, EventIcon } from './resources/Event';

function App() {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      i18nProvider={i18nProvider}
    >
      <Resource
        name='division'
        options={{ label: 'Τμήματα' }}
        list={DivisionList}
        create={DivisionCreate}
        edit={DivisionEdit}
        icon={DivisionIcon}
      />
      <Resource
        name='user'
        options={{ label: 'Χρήστες' }}
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
        icon={UserIcon}
      />
      <Resource
        name='hardware'
        options={{ label: 'Υλικά' }}
        list={HardwareList}
        create={HardwareCreate}
        edit={HardwareEdit}
        icon={HardwareIcon}
      />
      <Resource
        name='event'
        options={{ label: 'Συμβάντα' }}
        list={EventList}
        edit={EventEdit}
        icon={EventIcon}
      />
    </Admin>
  );
}

export default App;
