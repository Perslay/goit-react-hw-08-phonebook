import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// npm install react-router-dom
// import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { store, persistor } from './redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* loading - component or null that appears before data gets downloaded */}
      <PersistGate loading={null} persistor={persistor}>
        {/* <BrowserRouter> */}
        <App />
        {/* </BrowserRouter> */}
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
