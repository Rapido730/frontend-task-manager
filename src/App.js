// import logo from "./logo.svg";

import { useEffect} from "react";
// import "./App.css";

// import { Component } from "react";

import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import { Auth } from "./routes/authentication/authentication.component";
import { useDispatch, useSelector } from "react-redux";
import { deleteMethod, getAllTask } from "./utils/backend/api";
import {Fetch_Task_List} from "./store/tasks/tasks.action"
import { TasksComponent } from "./component/tasks/tasks.component";

const App = () => {
  const CurrentUserdata = useSelector((state)=>state.user.CurrentUserdata);
  const dispatch = useDispatch();
  // UserReg();  
  useEffect(()=>{
     const retrieveTask = async () => {
       const token = CurrentUserdata.token;
       const res = await getAllTask(token);
       dispatch(Fetch_Task_List(res.data));
      //  console.log("taskRetrieval")
      //  console.log(res);
     };
     
    if(CurrentUserdata!=null){
      // console.log({})
      // console.log("passed")
      // console.log(CurrentUserdata);
      retrieveTask()
    }

  },[CurrentUserdata])


  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Navigation />}>
        <Route path="signin" element={<Auth />} />
        <Route path="tasks" element={<TasksComponent/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
