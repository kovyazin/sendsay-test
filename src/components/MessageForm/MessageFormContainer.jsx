import { connect } from 'react-redux';
import { sendMessage, showThanksgivingMessage } from '../../reducers/reducer';
import MessageForm from './MessageForm';

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  { sendMessage, showThanksgivingMessage }
)(MessageForm);
