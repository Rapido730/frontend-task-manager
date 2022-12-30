
import { User_action_types } from "./user.types";

const INITIAL_STATE = {
    CurrentUser:null
}

export const UserReducer = (state=INITIAL_STATE,action) => {
    const {type,payload} = action;
    console.log("reducer")
    switch(type){
        case User_action_types.SetCurrentUser:
            return {...state,CurrentUser:payload};
        default:
            return {...state}
    }
}