import { getMessageInfo, sendFormData } from "../services/api";
import { SEND_MESSAGE, UPDATE_MESSAGE_STATUS } from "../constants/form";

export const sendMessageAC = (res, data) => ({ type: SEND_MESSAGE, res, data });
export const sendMessage = (data) => (dispatch) => {
    return sendFormData(data).then((res) => {
        dispatch(sendMessageAC(res, data));
    })
}

export const updateMessageStatusAC = (id, date, status) => ({ type: UPDATE_MESSAGE_STATUS, id, status, date });
export const updateMessageStatus = (id) => (dispatch) => {
    getMessageInfo(id).then(({obj: { dt, status }}) => {
        dispatch(updateMessageStatusAC(id, dt, status));
    })
}