/* eslint-disable default-case */
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/updateObject';

const initialState = {
    name: "",
    unreadMessagesNum: 0
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.NEW_MESSAGE:
            return updateObject(state, {unreadMessagesNum: state.unreadMessagesNum + 1});
        case actionTypes.OPEN_CHAT:
            return updateObject(state, {unreadMessagesNum: 0});
        case actionTypes.CHANGE_CHAT_NAME:
            return updateObject(state, {name: action.name});
    }
    return state;
};

export default reducer;
