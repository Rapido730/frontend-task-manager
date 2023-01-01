import FormInput from "../form-input/form-input.component";

import "./tasks.styles.scss";
import { TaskItem } from "../task-item/task-item.component";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { createTask } from "../../utils/backend/api";
import { Add_Task } from "../../store/tasks/tasks.action";

export const TasksComponent = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  // console.log(tasks);
  const CurrentUserdata = useSelector((state) => state.user.CurrentUserdata);
  const dispatch = useDispatch();

  const [TaskInput, SetTaskInput] = useState("");
  // console.log(tasks)

  const TaskInputHandler = (event) => {
    // console.log(event.target.value)
    SetTaskInput(event.target.value);
    // SetTaskInput(event.nativeEvent.data);
  };
  // console.log(tasks)
  const AddTaskHandler = async () => {
    // console.log(TaskInput)
    const res = await createTask(CurrentUserdata.token, TaskInput);
    console.log(res);
    if (res !== null) {
      const task = res.data;
      dispatch(Add_Task(task));
    } else {
      alert("Task not able to add");
    }
    // console.log(res);
    SetTaskInput("");
  };

  return (
    <div className="to-do-conatiner">
      <input
        className={"form-input"}
        type="search"
        onChange={TaskInputHandler}
        value={TaskInput}
      />
      <button className="add-button" onClick={AddTaskHandler}>
        Add
      </button>

      <div className="tasks-container">
        {tasks.map((task) => (
          <TaskItem key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};
