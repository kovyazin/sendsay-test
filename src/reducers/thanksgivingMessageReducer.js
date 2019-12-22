import { SHOW_THANKSGIVING_MESSAGE, HIDE_THANKSGIVING_MESSAGE } from "../constants/thanksgivingMessage";

const initialState = {
    isShow: false,
    email: null
};

const thanksgivingMessageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_THANKSGIVING_MESSAGE:
            return {
                ...state,
                isShow: true,
                email: action.email
            }
        case HIDE_THANKSGIVING_MESSAGE:
            return {
                ...state,
                isShow: false,
                email: null
            }
        default:
            return state;
    }
};

export default thanksgivingMessageReducer;