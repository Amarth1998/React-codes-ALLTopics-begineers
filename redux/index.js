import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './state/store';
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>
)



// As of React 18
