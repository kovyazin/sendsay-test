/* Import libraries */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Import action creators */
import { hideThanksgivingMessage } from '../../actionCreators/thanksgivingMessage';

/* Import styles */
import './ThanksgivingMessage.css';

const ThanksgivingMessage = ({ email }) => {
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

class ThanksgivingMessageContainer extends Component {
  componentDidMount() {
    setTimeout(this.props.hideThanksgivingMessage, 7000);
  }

  render() {
    const { email } = this.props;
    return <ThanksgivingMessage email={email} />;
  }
}

const mapStateToProps = ({ thanksgivingMessage: { email } }) => ({
   email
});

export default connect(mapStateToProps, { hideThanksgivingMessage })(
  ThanksgivingMessageContainer
);
