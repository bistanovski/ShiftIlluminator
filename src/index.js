import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Store from './Store';
import App from './containers/App';

ReactDOM.render(<Provider store={Store}>
                  <App />
                </Provider>, 
                document.querySelector('#root'));