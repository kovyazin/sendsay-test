import React from 'react';

import './SentMessages.css';

const SentMessages = (props) => {
  return (
    <div className="sent-messages">
      <div className="sent-messages-title">Отправленные сообщения</div>

      <table className="sent-messages-table">
        <thead>
          <tr className="sent-messages-header">
            <th className="sent-messages-heading">Дата</th>
            <th className="sent-messages-heading">Тема</th>
            <th className="sent-messages-heading">Статус</th>
          </tr>
        </thead>
        <tbody>
          <tr className="sent-messages-row">
            <td className="sent-messages-data">30 сентября</td>
            <td className="sent-messages-data">Тема письма, которая не поместится в эту строку, потому ч...</td>
            <td className="sent-messages-data color-success">Отправлено</td>
          </tr>
          <tr className="sent-messages-row">
            <td className="sent-messages-data">30 сентября</td>
            <td className="sent-messages-data">Тема письма, которая не поместится в эту строку, потому ч...</td>
            <td className="sent-messages-data color-waiting">В очереди</td>
          </tr>
          <tr className="sent-messages-row">
            <td className="sent-messages-data">30 сентября</td>
            <td className="sent-messages-data">Тема письма, которая не поместится в эту строку, потому ч...</td>
            <td className="sent-messages-data color-warning">Ошибка</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default SentMessages;
