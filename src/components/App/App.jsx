import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './App.css';

import Logo from '../Logo/Logo';
import MessageForm from '../MessageForm/MessageForm';
import SentMessages from '../SentMessages/SentMessages';
import ThanksgivingMessage from '../ThanksgivingMessage/ThanksgivingMessage';

const App = ({ isShowThanksgivingMessage }) => {
  return (
    <div className="app">
      <Logo />
      <div className="app-form">
        <TransitionGroup>
          {!isShowThanksgivingMessage && (
            <CSSTransition
              classNames="fade"
              timeout={0}>
              <MessageForm />
            </CSSTransition>
          )}
          {isShowThanksgivingMessage && (
            <CSSTransition
              classNames="fade"
              timeout={0}>
              <ThanksgivingMessage />
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
      <div className="app-messages">
        <SentMessages />
      </div>
    </div>
  )
}

const mapStateToProps = ({ reducer: { isShowThanksgivingMessage } }) => {
  return { isShowThanksgivingMessage }
}

export default connect(mapStateToProps)(App)
