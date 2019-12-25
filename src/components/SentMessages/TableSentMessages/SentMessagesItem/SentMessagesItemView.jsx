/* Import libraries */
import React from 'react';
import moment from 'moment';
import ru from 'moment/locale/ru';

/* Import styles */
import styles from './SentMessagesItem.module.css';

const SentMessagesItemView = ({ message, date, status }) => {
  return (
    <tr>
      <td className={styles.data}>
        {date &&
          moment(date)
            .locale('ru')
            .format('DD MMMM')}
      </td>
      <td className={styles.data} title={message}>
        {message}
      </td>
      <td className={styles.data}>
        {status === -1 && <span className={styles.success}>Отправлено</span>}
        {status < -1 && <span className={styles.warning}>Ошибка</span>}
        {status > -1 && <span className={styles.waiting}>В процессе</span>}
      </td>
    </tr>
  );
};

export default SentMessagesItemView;
