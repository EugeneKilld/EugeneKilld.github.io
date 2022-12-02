import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import {Provider} from "react-redux";
import {store} from "./core/store/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Theme preset={presetGpnDefault}>
      <Provider store={store}>
        <App />
      </Provider>
  </Theme>
);

reportWebVitals();
