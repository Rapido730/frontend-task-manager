import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetCurrentUser } from "../../store/user/user.action";


import "./signIn.style.scss";
import { postMethod,getMethod, getAllTask, deleteMethod, deleteTask, updateTask } from "../../utils/backend/api";


const SignIn = () => {
  const dispatch = useDispatch();
  const CurrentUserdata = useSelector((state)=> state.user.CurrentUserdata);
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [Response, SetResponse] = useState("");

  

  // const retrieveTask = async() => {
  //   const token = CurrentUserdata.token;
  //   const res = await getAllTask(token);
  //   console.log(res);
  // }
  const func = () => {
    const token = CurrentUserdata.token;
    // deleteTask(token);
    // updateTask(token);
  }

  const UserLogin = async (data) => {
    const res =  await postMethod(data,"/users/login");

    if(res){
      const user = res.data;
      dispatch(SetCurrentUser(user));
      return `Name : ${res.data.user.name} \n Age : ${res.data.user.age}`;
    }
    return "There is some error!";
    
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
    console.log("sign in")  
    event.preventDefault();
    UserLogin({ email: Email, password: Password }).then((resposne) => {
      SetResponse(resposne);
    });
  };
  return (
    <div className="sign-in-container">
      <h2 className="app-title">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="text"
          name="email"
          required
          onChange={handleEmailChange}
          value={Email}
        />
        <FormInput
          label="Password"
          type="text"
          name="password"
          required
          onChange={handlePasswordChange}
          value={Password}
        />

        <button className="submit" type="submit">
          {" "}
          Sign In{" "}
        </button>
      </form>
      <p>{Response}</p>
      <button className="buttons-container" onClick={func}></button>
    </div>
  );
};

export default SignIn;
