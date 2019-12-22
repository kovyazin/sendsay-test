/* Import libraries */
import React from 'react';
import { connect } from 'react-redux';

/* Import components */
import TableSentMessages from './TableSentMessages/TableSentMessages';

/* Import styles */
import './SentMessages.css';

const SentMessages = ({ sentMessages }) => {
  return (
    <div className="sent-messages">
      <div className="sent-messages-title">Отправленные сообщения</div>
      {!!sentMessages.length && (
        <TableSentMessages sentMessages={sentMessages} />
      )}
      {!sentMessages.length && <div>Сообщения ещё не отправлялись</div>}
    </div>
  );
};

const mapStateToProps = ({ form: { sentMessages } }) => ({
  sentMessages
});

export default connect(mapStateToProps)(SentMessages);
