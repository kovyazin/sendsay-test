/* Import libraries */
import React from 'react'
import { connect } from 'react-redux'

/* Import components */
import TableSentMessages from './TableSentMessages/TableSentMessages'

/* Import styles */
import styles from './SentMessages.module.css'

const SentMessages = ({ sentMessages }) => {
  return (
    <div className={styles.sentMessages}>
      <div className={styles.title}>Отправленные сообщения</div>
      {!!sentMessages.length && (
        <TableSentMessages sentMessages={sentMessages} />
      )}
      {!sentMessages.length && <div>Сообщения ещё не отправлялись</div>}
    </div>
  )
}

const mapStateToProps = ({ form: { sentMessages } }) => ({
  sentMessages
})

export default connect(mapStateToProps)(SentMessages)
