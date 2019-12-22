import { SEND_MESSAGE, UPDATE_MESSAGE_STATUS } from "../constants/form";

const initialState = {
  sentMessages: []
};

const formReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
}

export default formReducer;
