import Sendsay from 'sendsay-api';

const apiKey = '192D7YRfBa7DSUVVQIJ1m-KsCxOsTp0qum0tKw3SlO8XShNe2xLDWtd2LA6GVxJiQmR07ouhOtA';
const sendsay = new Sendsay({ apiKey });

const transformData = ({ subject, fromName, fromEmail, toName, message, mca }) => {
  return {
    action: 'issue.send.test',
    letter: {
      subject,
      'from.name': fromName,
      'from.email': fromEmail,
      'to.name': toName,
      message: { text: message },
      attaches: []
    },
    sendwhen: 'test',
    mca: [mca]
  }
}

export const sendFormData = (data) => {
  return sendsay.request(transformData(data))
    .then((res) => res)
    .catch((err) => err)
}

export const getMessageInfo = (id) => {
  return sendsay.request({ action: 'track.get', id })
    .then((res) => res)
    .catch((err) => err)
}
