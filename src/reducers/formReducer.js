import {
  SEND_MESSAGE,
  UPDATE_MESSAGE_STATUS,
  ADD_ATTACHED_FILE,
  CLEAN_ATTACHED_FILES,
  REMOVE_ATTACHED_FILE,
  SET_FILES_ERROR
} from '../constants/form'

const initialState = {
  sentMessages: [],
  attachedFiles: [],
  filesError: null
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
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
        sentMessages: state.sentMessages.map(msg => {
          if (msg.id === action.id) {
            return {
              ...msg,
              result: {
                date: action.date,
                status: parseFloat(action.status)
              }
            }
          }
          return msg
        })
      }
    case ADD_ATTACHED_FILE:
      return {
        ...state,
        filesError: null,
        attachedFiles: [
          ...state.attachedFiles,
          {
            name: action.payload.name,
            base64: action.payload.base64,
            size: action.payload.size,
            encoding: 'base64'
          }
        ]
      }
    case REMOVE_ATTACHED_FILE: {
      return {
        ...state,
        filesError: null,
        attachedFiles: state.attachedFiles.filter(
          ({ name }) => name !== action.payload.name
        )
      }
    }
    case CLEAN_ATTACHED_FILES: {
      return {
        ...state,
        attachedFiles: []
      }
    }
    case SET_FILES_ERROR:
      return {
        ...state,
        filesError: action.payload.msg
      }
    default:
      return state
  }
}

export default formReducer
