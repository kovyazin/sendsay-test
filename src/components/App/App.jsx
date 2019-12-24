/* Import libraries */
import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

/* Import components */
import Logo from '../Logo/Logo';
import MessageForm from '../MessageForm/MessageForm';
import SentMessages from '../SentMessages/SentMessages';
import ThanksgivingMessage from '../ThanksgivingMessage/ThanksgivingMessage';

/* Import styles */
import styles from './App.module.css';

const App = ({ isShowThanksgivingMessage }) => {
  return (
    <div className={styles.app}>
      <Logo />
      <div className={styles.form}>
        <TransitionGroup>
          {!isShowThanksgivingMessage && (
            <CSSTransition classNames="fade" timeout={0}>
              <MessageForm />
            </CSSTransition>
          )}
          {isShowThanksgivingMessage && (
            <CSSTransition classNames="fade" timeout={0}>
              <ThanksgivingMessage />
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
      <div className={styles.messages}>
        <SentMessages />
      </div>
    </div>
  );
};

const mapStateToProps = ({ thanksgivingMessage: { isShow: isShowThanksgivingMessage } }) => ({
  isShowThanksgivingMessage
});

export default connect(mapStateToProps)(App);
