import React from 'react';

import './App.css';

import Logo from '../Logo/Logo';
import MessageForm from '../MessageForm/MessageForm';
import SentMessages from '../SentMessages/SentMessages';

const App = (props) => {
  return (
    <div className="app">
      <Logo />
      <div className="app-form">
        <MessageForm />
      </div>
      <div className="app-messages">
        <SentMessages />
      </div>
    </div>
  )
}

export default App;
