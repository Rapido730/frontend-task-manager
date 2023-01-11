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
    if (CurrentUserdata === null) {
      alert("first login in your account!");
      return;
    }
    const res = await createTask(CurrentUserdata.token, TaskInput);
    if (res !== null) {
      const task = res.data;
      dispatch(Add_Task(task));
    } else {
      alert("Task not able to add");
    }
    // console.log(res);
    SetTaskInput("");
  };
  const onKeyUp = (event) => {
    if (event.key === "Enter") {
      AddTaskHandler();
    }
  };

  return (
    <div className="to-do-container">
      <div className="add-task-container">
        <input
          className={"form-input"}
          type="search"
          onChange={TaskInputHandler}
          value={TaskInput}
          onKeyDown={onKeyUp}
        />
        <button className="add-button" onClick={AddTaskHandler}>
          Add
        </button>
      </div>

      <div className="tasks-container">
        {tasks.map((task) => (
          <TaskItem key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};
