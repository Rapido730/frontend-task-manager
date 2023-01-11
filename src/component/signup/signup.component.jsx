
import { useState } from "react";
import FormInput from "../form-input/form-input.component"
import { Button } from "../Button/button.component";
import "./signup.style.scss"
import { postMethod} from "../../utils/backend/api";

const UserReg = async (data) => {
  
    const res =  await  postMethod(data,'/users');
    if(res){
      return "account created";
    }
    return "There is some error!"
  };

const SignUp = () => {
  const [Name, SetName] = useState("");
  const [Age, SetAge] = useState("");
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
    <div className="sign-up-container">
      <h2 className="app-title">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          type="text"
          required
          name="Name"
          onChange={handleNameChange}
          value={Name}
        />

        <FormInput
          label="Age"
          type="number"
          required
          name="Age"
          min = "0"
          onChange={handleAgeChange}
          value={Age}
        />

        <FormInput
          label="Email"
          type="text"
          required
          name="Email"
          onChange={handleEmailChange}
          value={Email}
        />

        <FormInput
          label="Password"
          type="text"
          required
          name="Password"
          onChange={handlePasswordChange}
          value={Password}
        />
        <Button button_type={'inverted'} type="submit" >Submit</Button>
      </form>
      <p>{Response}</p>
    </div>
  );
};

export default SignUp;
