import { getMessageInfo, sendFormData } from "../services/api";
import {
    SEND_MESSAGE, UPDATE_MESSAGE_STATUS,
    ADD_ATTACHED_FILE, CLEAN_ATTACHED_FILES,
    REMOVE_ATTACHED_FILE, SET_FILES_ERROR
} from "../constants/form";

export const sendMessageAC = (res, data) => ({ type: SEND_MESSAGE, res, data });
export const sendMessage = (data) => (dispatch) => {
    return sendFormData(data).then((res) => {
        dispatch(sendMessageAC(res, data));
    });
};

export const updateMessageStatusAC = (id, date, status) => ({ type: UPDATE_MESSAGE_STATUS, id, status, date });
export const updateMessageStatus = (id) => (dispatch) => {
    getMessageInfo(id).then(({obj: { dt, status }}) => {
        dispatch(updateMessageStatusAC(id, dt, status));
    });
};

export const addAttachedFile = (name, base64, size) => ({ type: ADD_ATTACHED_FILE, payload: { name, base64, size } });
export const cleanAttachedFiles = () => ({ type: CLEAN_ATTACHED_FILES });
export const removeAttachedFile = (name) => ({ type: REMOVE_ATTACHED_FILE, payload: { name } });
export const setFilesError = (msg) => ({ type: SET_FILES_ERROR, payload: { msg } });