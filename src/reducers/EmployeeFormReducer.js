import { CREATE_EMPLOYEE, FIREBASE_CREATE_EMPLOYEE, FETCH_EMPLOYEES, UPDATE_EMPLOYEE } from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_EMPLOYEE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case FIREBASE_CREATE_EMPLOYEE:
            return INITIAL_STATE;
        case FETCH_EMPLOYEES:
            return { ...state, employees: action.payload };
        case UPDATE_EMPLOYEE:
            return { ...state, employees: action.payload };
        default:
            return state;
    }
};
