import { AUTH, LOGOUT } from "../constants/actionTypes";

const authReducer = (state, action) => {
    switch(action.type) {
        case AUTH:
            console.log(action?.data);
            return state;
        // case LOGOUT:
        //     break;
        default:
            return state;
    }
}

export default authReducer;