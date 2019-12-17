import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideThanksgivingMessage } from '../../reducers/reducer';

import './ThanksgivingMessage.css';

const ThanksgivingMessage = (props) => {
  return (
    <div className="thanksgiving-message">
      <div className="thanksgiving-message-title">
        Сообщение поставлено в очередь на отправку
      </div>
      <div className="thanksgiving-message-text">
        Совсем скоро сообщение вылетит из сервера, и будет
        двигаться в сторону почты получателя «abc@my.com»
        со скоростью электронов.
      </div>
    </div>
  )
}

class ThanksgivingMessageContainer extends Component {

  componentDidMount() {
    setTimeout(this.props.hideThanksgivingMessage, 7000);
  }

  render() {
    return (
      <ThanksgivingMessage />
    )
  }
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, { hideThanksgivingMessage })(ThanksgivingMessageContainer);
