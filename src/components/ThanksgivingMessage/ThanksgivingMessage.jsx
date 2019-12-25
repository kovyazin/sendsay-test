/* Import libraries */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

/* Import action creators */
import { hideThanksgivingMessage } from '../../actionCreators/thanksgivingMessage'

/* Import styles */
import styles from './ThanksgivingMessage.module.css'

const ThanksgivingMessage = ({ email, hideThanksgivingMessage }) => {
  useEffect(() => {
    const timer = setTimeout(hideThanksgivingMessage, 7000)
    return () => clearTimeout(timer)
  })

  return (
    <div className={styles.thanksgivingMessage}>
      <div className={styles.title}>
        Сообщение поставлено в очередь на отправку
      </div>
      <div className={styles.text}>
        Совсем скоро сообщение вылетит из сервера, и будет двигаться в сторону
        почты получателя «{email}» со скоростью электронов.
      </div>
    </div>
  )
}

const mapStateToProps = ({ thanksgivingMessage: { email } }) => ({
  email
})

export default connect(mapStateToProps, { hideThanksgivingMessage })(
  ThanksgivingMessage
)
