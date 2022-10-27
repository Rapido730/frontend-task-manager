import axios from "axios";
import { useState } from "react";

import "./signup.style.css"


const UserReg = async (data) => {
  
  try {
    // console.log("post");
    const res = await axios.post(
      "https://rapido-task-manager.herokuapp.com/users",
      data
    );
    
    return "Account Created!";
  } catch (error) {
  
    return "There is some error!"
  }
};

const SignUp = () => {
  const [Name, SetName] = useState("");
  const [Age, SetAge] = useState(0);
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [Response,SetResponse] = useState("");

  const handleNameChange = (event) => {
    const name = event.target.value;
    SetName(name);
  };
  const handleAgeChange = (event) => {
    const age = event.target.value;
    SetAge(age);
  };
  const handleEmailChange = (event) => {
    const email = event.target.value;
    SetEmail(email);
  };
  const handlePasswordChange = (event) => {
    const password = event.target.value;
    SetPassword(password);
  };
  const handleSubmit = (event) => {
    SetResponse("");
    event.preventDefault();
    UserReg({name :Name,age:Age, email :Email, password:Password})
    .then((resposne)=> {
      SetResponse(resposne)
    })
  };
  return (
    <div className="create">
    <h2 className="app-title">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label >
          Enter your name:
          <input type="text" name="name" required onChange={handleNameChange} />
        </label>
        <label>
          Enter your age:
          <input type="number" name="age" required onChange={handleAgeChange} />
        </label>
        <label>
          Enter your email:
          <input
            type="text"
            name="email"
            required
            onChange={handleEmailChange}
          />
        </label>
        <label>
          Create your password:
          <input
            type="text"
            name="password"
            required
            onChange={handlePasswordChange}
          />
        </label>
        <input className="submit" type="submit"/>
      </form>
      <p>{Response}</p>
    </div>
  );
};

export default SignUp;
