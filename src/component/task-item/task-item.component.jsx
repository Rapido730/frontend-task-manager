
import { useDispatch,useSelector } from "react-redux";
import "./task-item.style.scss"
import {Delete_Task, Update_Task_Data} from "../../store/tasks/tasks.action"
import { deleteTaskMethod, updateTask } from "../../utils/backend/api";
import { Checkbox } from "../Checkbox/checkbox.component";


export const TaskItem = ({task}) => {
    const CurrentUserdata = useSelector((state) => state.user.CurrentUserdata);
    const dispatch = useDispatch();
    const {description,completed} = task;
    console.log(description,completed);
    // const status = completed?"finished":"pending";
    // console.log(task.task)
    const taskCompleted = () => {
        const updated_task = {...task,completed:!completed};
        const token = CurrentUserdata.token
        if(updateTask(token,updated_task)){
            dispatch(Update_Task_Data(updated_task));
        }  
    }
    const deleteTask = () => {
      const token = CurrentUserdata.token;
      if (deleteTaskMethod(token,task.description)) {
        dispatch(Delete_Task(task));
      }
    };

    return (
      <div className="task-item-container">
        <label>
          <Checkbox
            checked={completed}
            onChange={taskCompleted}
          />
        </label>
        <h2>{description}</h2>
        <button className="removeButton" onClick={deleteTask}>X</button>
      </div>
    );
}