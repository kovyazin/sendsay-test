/* Import libraries */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import ru from 'moment/locale/ru';

/* Import reducers */
import { updateMessageStatus } from '../../../../actionCreators/form';

class SentMessagesItemContainer extends Component {
  componentDidMount() {
    const { updateMessageStatus, id } = this.props;

    updateMessageStatus(id);

    this.timer = setInterval(() => {
      updateMessageStatus(id);
    }, 3000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      clearInterval(this.timer);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <SentMessagesItem {...this.props} />;
  }
}

const SentMessagesItem = ({ message, date, status }) => {
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

export default connect(() => ({}), { updateMessageStatus })(
  SentMessagesItemContainer
);
