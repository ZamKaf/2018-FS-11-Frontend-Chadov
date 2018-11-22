import * as actionTypes from './actionTypes';

export const newMessage = () => {
    return {
        type: actionTypes.NEW_MESSAGE
    };
};

export const openChat = () => {
    return {
        type: actionTypes.OPEN_CHAT
    };
};

export const changeChatName = ( name ) => {
    return {
        type: actionTypes.CHANGE_CHAT_NAME,
        name: name
    };
};
