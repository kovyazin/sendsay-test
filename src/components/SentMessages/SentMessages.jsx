import React from 'react';
import { connect } from 'react-redux';
import './SentMessages.css';
import TableSentMessages from './TableSentMessages/TableSentMessages';

const SentMessages = ({ sentMessages }) => {
  return (
    <div className="sent-messages">
      <div className="sent-messages-title">Отправленные сообщения</div>
      {!!sentMessages.length && <TableSentMessages sentMessages={sentMessages} />}
      {!sentMessages.length && <div>Сообщения ещё не отправлялись</div>}
    </div>
  )
}

const mapStateToProps = ({ reducer: { sentMessages } }) => {
  return { sentMessages }
}

export default connect(mapStateToProps)(SentMessages);
