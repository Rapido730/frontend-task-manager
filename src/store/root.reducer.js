import {combineReducers} from "redux";
import { UserReducer } from "./user/user.reducer";
import { TasksReducer } from "./tasks/tasks.reducer";

export const rootReducer = combineReducers({
    user:UserReducer,
    tasks:TasksReducer
})