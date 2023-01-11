
import { User_action_types } from "./user.types";

const INITIAL_STATE = {
    CurrentUserdata:null
}

export const UserReducer = (state=INITIAL_STATE,action) => {
    const {type,payload} = action;
    // console.log("reducer")
    // console.log(state);
    switch(type){
        case User_action_types.SetCurrentUser:
            return {...state,CurrentUserdata:payload};
        case User_action_types.persistREHYDRATE:
            // console.log(payload);
            return {...state,CurrentUserdata:payload.user.CurrentUserdata}
        default:
            return {...state}
    }
}