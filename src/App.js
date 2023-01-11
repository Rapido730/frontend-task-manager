import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import { Auth } from "./routes/authentication/authentication.component";
import { useDispatch, useSelector } from "react-redux";
import { getAllTask } from "./utils/backend/api";
import { Fetch_Task_List } from "./store/tasks/tasks.action";
import { TasksComponent } from "./component/tasks/tasks.component";
import { Home } from "./routes/home/home.component";

const App = () => {
  const CurrentUserdata = useSelector((state) => state.user.CurrentUserdata);
  const dispatch = useDispatch();

  useEffect(() => {
    const retrieveTask = async () => {
      const token = CurrentUserdata.token;
      const res = await getAllTask(token);
      dispatch(Fetch_Task_List(res.data));
    };

    if (CurrentUserdata != null) {
      retrieveTask();
    }
  }, [CurrentUserdata]);

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<TasksComponent />} />
          <Route path="signin" element={<Auth />} />
          <Route path="tasks" element={<TasksComponent />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
