/* Import libraries */
import React, {Component, useEffect} from 'react';
import { connect } from 'react-redux';

/* Import action creators */
import { hideThanksgivingMessage } from '../../actionCreators/thanksgivingMessage';

/* Import styles */
import './ThanksgivingMessage.css';

const ThanksgivingMessage = ({ email, hideThanksgivingMessage }) => {
  useEffect(() => {
    const timer = setTimeout(hideThanksgivingMessage, 7000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="thanksgiving-message">
      <div className="thanksgiving-message-title">
        Сообщение поставлено в очередь на отправку
      </div>
      <div className="thanksgiving-message-text">
        Совсем скоро сообщение вылетит из сервера, и будет двигаться в сторону
        почты получателя «{email}» со скоростью электронов.
      </div>
    </div>
  );
};

const mapStateToProps = ({ thanksgivingMessage: { email } }) => ({
   email
});

export default connect(mapStateToProps, { hideThanksgivingMessage })(
  ThanksgivingMessage
);
