import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/index';
import App from './containers/App.jsx';

const Root = () => {
   return (
       <Provider store={store}>
           <App/>
       </Provider>
   )
};

export default Root;
