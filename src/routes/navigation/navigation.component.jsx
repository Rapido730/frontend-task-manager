import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.style.scss";
import { ReactComponent as AppLogo } from "../../assests/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { SetCurrentUser } from "../../store/user/user.action";
import { Fetch_Task_List } from "../../store/tasks/tasks.action";

const Navigation = () => {
  const dispatch = useDispatch();
  const CurrentUserdata = useSelector((state) => state.user.CurrentUserdata);
  // const token = useSelector((state) => state.user.CurrentUser);
  let CurrentUser = null;
  if (CurrentUserdata != null) {
    const { user, token } = CurrentUserdata;
    CurrentUser = user;
  }
  const signOutHandler = () => {
    dispatch(Fetch_Task_List([]));
    dispatch(SetCurrentUser(null));
  };
  
  return (
    <Fragment>
      <div className="navigation">
        <div className="logo-container">
          <AppLogo className="logo" />
        </div>
        <div className="app-link-conatiner">
          <Link className="app-link" to="/tasks">
            Tasks
          </Link>
          {CurrentUser ? (
            <Link className="app-link" to="/signin">
              <span onClick={signOutHandler}>Sign Out</span>
            </Link>
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
