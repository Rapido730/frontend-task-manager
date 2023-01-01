import { Tasks_Action_Types } from "./tasks.types";
const data = [
  {
    _id: "63b1cc2c4398095c222245e4",
    description: "washing",
    completed: true,
    author: "63aee3e95295796bdb016c16",
    createdAt: "2023-01-01T18:08:44.979Z",
    updatedAt: "2023-01-01T18:42:10.411Z",
    __v: 0,
  },
  {
    _id: "63b1d484238d61535ebb6c9a",
    description: "bathing",
    completed: false,
    author: "63aee3e95295796bdb016c16",
    createdAt: "2023-01-01T18:44:20.013Z",
    updatedAt: "2023-01-01T18:44:20.013Z",
    __v: 0,
  },
  {
    _id: "63b1d48f238d61535ebb6c9d",
    description: "cleaning",
    completed: false,
    author: "63aee3e95295796bdb016c16",
    createdAt: "2023-01-01T18:44:31.247Z",
    updatedAt: "2023-01-01T18:44:31.247Z",
    __v: 0,
  },
  {
    _id: "63b1d49b238d61535ebb6ca0",
    description: "charging",
    completed: false,
    author: "63aee3e95295796bdb016c16",
    createdAt: "2023-01-01T18:44:43.372Z",
    updatedAt: "2023-01-01T18:44:43.372Z",
    __v: 0,
  },
];
const INITIAL_STATE = {
  tasks: data,
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
