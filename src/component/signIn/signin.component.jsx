import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SetCurrentUser } from "../../store/user/user.action";

import { Button } from "../Button/button.component";

import "./signIn.style.scss";
import { postMethod } from "../../utils/backend/api";

const SignIn = () => {
  const dispatch = useDispatch();
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [Response, SetResponse] = useState("");

  const UserLogin = async (data) => {
    const res = await postMethod(data, "/users/login");

    if (res) {
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
    SetResponse("loading...");
    event.preventDefault();
    UserLogin({ email: Email, password: Password }).then((resposne) => {
      SetResponse("Signed In!");
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

        <Button button_type={"inverted"} type="submit">
          Sign In
        </Button>
      </form>
      <p>{Response}</p>
    </div>
  );
};

export default SignIn;
