import { Tasks_Action_Types } from "./tasks.types";

const INITIAL_STATE = {
  tasks: [],
};

export const TasksReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  console.log("taskreducer");
  switch (type) {
    case Tasks_Action_Types.Fetch_Task_List:
      return { ...state, tasks: payload };
    case Tasks_Action_Types.Add_task_To_List:
      const newTask = state.tasks;
      newTask.push(payload);  
      return { ...state, tasks: newTask };
    case Tasks_Action_Types.Update_Task_Data:
      const { description, completed } = payload;
      state.tasks = state.tasks.map((task) => {
        return task._id !== payload._id
          ? task
          : { ...task, description: description, completed: completed };
      });

      return { ...state };
      case Tasks_Action_Types.Delete_Task_From_List:
        state.tasks = state.tasks.filter((task) => task._id!==payload._id);
        return {...state}
    default:
      return { ...state };
  }
};
