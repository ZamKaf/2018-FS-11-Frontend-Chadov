import * as actionTypes from './actionTypes';

export const authorization = ( isAuthorized ) => {
    return {
        type: actionTypes.AUTHORIZATION,
        isAuthorized: isAuthorized
    };
};

export const changeUserName = ( name ) => {
    return {
        type: actionTypes.CHANGE_USER_NAME,
        name: name
    };
};
