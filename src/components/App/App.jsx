import React from 'react';

import './App.css';

import Logo from '../Logo/Logo';
import Form from '../Form/Form';
import SentMessages from '../SentMessages/SentMessages';

const App = (props) => {
  return (
    <div className="app">
      <Logo />
      <div className="app-form">
        <Form />
      </div>
      <div className="app-messages">
        <SentMessages />
      </div>
    </div>
  )
}

export default App;
