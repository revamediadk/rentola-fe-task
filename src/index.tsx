import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './app';
import reportWebVitals from './reportWebVitals';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import './styles/index.scss';
import { store } from './rtk/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <CssBaseline/>
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <Router>
          <App/>
        </Router>
      </Provider>
    </StyledEngineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
