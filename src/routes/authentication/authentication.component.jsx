
import SignIn from "../../component/signIn/signin.component";
import "./authentication.styles.scss"
import SignUp from "../../component/signup/signup.component";

export const Auth = () => {

    return (
      <div className="auth-container">
        <SignUp/>
        <SignIn/>
      </div>
    );
}