// import logo from "./logo.svg";

import { useState } from "react";
import "./App.css";

// import { Component } from "react";
import SignUp from "./component/signup";


const App  =  () => {
  const {userData,SetuserData} = useState();

  // UserReg();

     return (
      <div className="app-container">
      <h1 className="app-title"> Task Manager</h1>
      <SignUp />
      </div>
    );

}

export default App;
