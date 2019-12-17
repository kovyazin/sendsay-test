import { sendFormData, getMessageInfo } from '../services/api';

const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_MESSAGE_STATUS = 'UPDATE_MESSAGE_STATUS';
const SHOW_THANKSGIVING_MESSAGE = 'SHOW_THANKSGIVING_MESSAGE';
const HIDE_THANKSGIVING_MESSAGE = 'HIDE_THANKSGIVING_MESSAGE';

const initialState = {
  sentMessages: [],
  isShowThanksgivingMessage: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        sentMessages: [
          ...state.sentMessages,
          {
            values: {
              ...action.data
            },
            id: action.res['track.id']
          }
        ]
      }
    case UPDATE_MESSAGE_STATUS:
      return {
        ...state,
        sentMessages: state.sentMessages.map((msg) => {
          if (msg.id === action.id) {
            return {
              ...msg,
              result: {
                date: action.date,
                status: parseFloat(action.status)
              }
            }
          }
          return msg;
        })
      }
    case SHOW_THANKSGIVING_MESSAGE:
      return {
        ...state,
        isShowThanksgivingMessage: true
      }
    case HIDE_THANKSGIVING_MESSAGE:
      return {
        ...state,
        isShowThanksgivingMessage: false
      }
    default:
      return state;
  }
}

export const sendMessageAC = (res, data) => ({ type: SEND_MESSAGE, res, data });
export const sendMessage = (data) => (dispatch) => {
  sendFormData(data).then((res) => {
    dispatch(sendMessageAC(res, data));
  })
}

export const updateMessageStatusAC = (id, date, status) => ({ type: UPDATE_MESSAGE_STATUS, id, status, date });
export const updateMessageStatus = (id) => (dispatch) => {
  getMessageInfo(id).then(({obj: { dt, status }}) => {
    dispatch(updateMessageStatusAC(id, dt, status));
  })
}

export const showThanksgivingMessage = () => ({ type: SHOW_THANKSGIVING_MESSAGE });
export const hideThanksgivingMessage = () => ({ type: HIDE_THANKSGIVING_MESSAGE });

export default reducer;
