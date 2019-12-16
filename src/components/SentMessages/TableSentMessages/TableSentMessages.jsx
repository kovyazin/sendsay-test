import React from 'react';
import SentMessagesItem from './SentMessagesItem/SentMessagesItem';
import './TableSentMessages.css';

const TableSentMessages = ({ sentMessages }) => {
  return (
    <table className="sent-messages-table">
      <thead>
        <tr className="sent-messages-header">
          <th className="sent-messages-heading">Дата</th>
          <th className="sent-messages-heading">Тема</th>
          <th className="sent-messages-heading">Статус</th>
        </tr>
      </thead>
      <tbody>
        {
          sentMessages.map(({ id, values: { message }, result: { status = 0, date = null } = {} }) => {
            return (
              <SentMessagesItem
                key={id}
                message={message}
                id={id}
                status={status}
                date={date} />
            )
          })
        }
      </tbody>
    </table>
  )
}

export default TableSentMessages;
