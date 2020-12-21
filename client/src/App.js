// React admin
import React from 'react';
import { Admin, Resource } from 'react-admin';

// Providers
import restProvider from 'ra-data-simple-rest';
import authProvider from './providers/authProvider';
//import i18nProvider from './providers/i18nProvider';

// Resources
import { UserList, UserCreate, UserEdit, UserIcon } from './components/User';
import { DivisionList, DivisionCreate, DivisionEdit, DivisionIcon } from './components/Division';
import { HardwareList, HardwareCreate, HardwareEdit, HardwareIcon } from './components/Hardware';
import { EventList, EventEdit, EventIcon } from './components/Event';

function App() {
  return (
    <Admin
      dataProvider={ restProvider('http://localhost:3000') }
      authProvider={authProvider}
    >
      <Resource
        name='division'
        list={DivisionList}
        create={DivisionCreate}
        edit={DivisionEdit}
        icon={DivisionIcon}
      />
      <Resource
        name='user'
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
        icon={UserIcon}
      />
      <Resource
        name='hardware'
        list={HardwareList}
        create={HardwareCreate}
        edit={HardwareEdit}
        icon={HardwareIcon}
      />
      <Resource
        name='event'
        list={EventList}
        edit={EventEdit}
        icon={EventIcon}
      />
    </Admin>
  );
}

export default App;
