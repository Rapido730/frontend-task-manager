import { Fragment,useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.style.scss";
import { ReactComponent as AppLogo } from "../../assests/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { postMethod,SignOutUser } from "../../utils/backend/api";
import { SetCurrentUser } from "../../store/user/user.action";

const Navigation = () => {
  const dispatch = useDispatch();
  const CurrentUser = useSelector((state) => state.user.CurrentUser);
  console.log(CurrentUser)

  const signOutHandler = () => {
    // SignOutUser();
    dispatch(SetCurrentUser(null));
    

  }


  useEffect(() => {
    console.log(CurrentUser);
  }, [CurrentUser]);

  return (
    <Fragment>
      <div className="navigation">
        <div className="logo-container">
          <AppLogo className="logo" />
        </div>
        <div className="app-link-conatiner">
          {CurrentUser ? (
            <span onClick={signOutHandler}>Sign Out</span>
          ) : (
            <Link className="app-link" to="/signin">
              Sign In
            </Link>
          )}
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Navigation;
