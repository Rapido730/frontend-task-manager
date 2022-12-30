import { User_action_types } from "./user.types"

export const SetCurrentUser = (user) => {
    return {type:User_action_types.SetCurrentUser,payload:user};
}