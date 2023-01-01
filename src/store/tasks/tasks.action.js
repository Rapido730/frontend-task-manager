
import { Tasks_Action_Types } from "./tasks.types"

export const Fetch_Task_List = (tasks) => {
  return { type: Tasks_Action_Types.Fetch_Task_List, payload: tasks };
};
export const Add_Task = (task) => {
    return {type:Tasks_Action_Types.Add_task_To_List,payload:task};
}
export const Update_Task_Data = (updated_task) => {
    return {type:Tasks_Action_Types.Update_Task_Data,payload:updated_task}
}

export const Delete_Task = (task) => {
  return {type:Tasks_Action_Types.Delete_Task_From_List,payload:task}
}