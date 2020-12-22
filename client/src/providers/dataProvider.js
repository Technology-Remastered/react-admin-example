/**
 *  Define our custom data provider here
 *  For now, use a simple api
 */

import restProvider from 'ra-data-simple-rest';

export default restProvider('http://localhost:3000');