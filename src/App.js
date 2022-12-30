// import logo from "./logo.svg";

import { useState } from "react";
// import "./App.css";

// import { Component } from "react";
import SignUp from "./component/signup/signup.component";
import SignIn from "./component/signIn/signin.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import { Auth } from "./routes/authentication/authentication.component";

const App = () => {
  const { userData, SetuserData } = useState();

  // UserReg();

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Navigation />}>
        <Route path="signin" element={<Auth />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
