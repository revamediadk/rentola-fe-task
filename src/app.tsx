import React from 'react';
import ModalManager from './components/modals/modal-manager';
import AppRouter from './components/router/app-router';

function App() {
  return (
    <div className="App">
      <ModalManager />
      <AppRouter />
    </div>
  );
}

export default App;
