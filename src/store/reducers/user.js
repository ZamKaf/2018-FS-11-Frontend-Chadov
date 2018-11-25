/* eslint-disable default-case */
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/updateObject';


const initialState = {
    name: "",
    isAuthorised: false
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.CHANGE_USER_NAME : return updateObject( state, { name: state.name } );
        case actionTypes.AUTHORIZATION : return updateObject(state, {isAuthorised: action.isAuthorised});
    }
    return state;
};

export default reducer;
