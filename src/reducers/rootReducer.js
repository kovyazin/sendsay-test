import { combineReducers } from 'redux';
import formReducer from './formReducer';
import thanksgivingMessageReducer from './thanksgivingMessageReducer';

const rootReducer = combineReducers({
  form: formReducer,
  thanksgivingMessage: thanksgivingMessageReducer
});

export default rootReducer;
