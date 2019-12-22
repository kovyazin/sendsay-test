import { SHOW_THANKSGIVING_MESSAGE, HIDE_THANKSGIVING_MESSAGE } from "../constants/thanksgivingMessage";

export const showThanksgivingMessage = (email) => ({ type: SHOW_THANKSGIVING_MESSAGE, email });
export const hideThanksgivingMessage = () => ({ type: HIDE_THANKSGIVING_MESSAGE });