/* Import libraries */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Import reducers */
import { updateMessageStatus } from '../../../../actionCreators/form';

/* Import components */
import SentMessagesItemView from "./SentMessagesItemView";

class SentMessagesItem extends Component {
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
    return <SentMessagesItemView {...this.props} />;
  }
}

export default connect(() => ({}), { updateMessageStatus })(
  SentMessagesItem
);