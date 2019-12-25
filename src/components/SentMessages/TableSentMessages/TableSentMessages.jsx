/* Import libraries */
import React from 'react'

/* Import components */
import SentMessagesItem from './SentMessagesItem/SentMessagesItem'

/* Import styles */
import styles from './TableSentMessages.module.css'

const TableSentMessages = ({ sentMessages }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.header}>
          <th className={styles.heading}>Дата</th>
          <th className={styles.heading}>Тема</th>
          <th className={styles.heading}>Статус</th>
        </tr>
      </thead>
      <tbody>
        {sentMessages.map(
          ({
            id,
            values: { message },
            result: { status = 0, date = null } = {}
          }) => {
            return (
              <SentMessagesItem
                key={id}
                message={message}
                id={id}
                status={status}
                date={date}
              />
            )
          }
        )}
      </tbody>
    </table>
  )
}

export default TableSentMessages
