/* Import libraries */
import React from 'react';
import moment from 'moment';
import ru from 'moment/locale/ru';

const SentMessagesItemView = ({ message, date, status }) => {
  return (
    <tr className="sent-messages-row">
      <td className="sent-messages-data">
        {date &&
          moment(date)
            .locale('ru')
            .format('DD MMMM')}
      </td>
      <td className="sent-messages-data" title={message}>
        {message}
      </td>
      <td className="sent-messages-data">
        {status === -1 && <span className="color-success">Отправлено</span>}
        {status < -1 && <span className="color-warning">Ошибка</span>}
        {status > -1 && <span className="color-waiting">В процессе</span>}
      </td>
    </tr>
  );
};

export default SentMessagesItemView;
