import axios from "axios";
import { backend_url } from "../../assests/backend";
export const postMethod = async (data, link, config = {}) => {
  try {
    const res = await axios.post(backend_url + link, data, config);
    return res;
  } catch (error) {
    return null;
  }
};

export const createTask = async (token, description) => {
  const data = {
    description: description,
    completed: false,
  };
  // console.log(CurrentUserdata);
  const Authorization = "Bearer " + token;
  // console.log(Authorization);
  // console.log("hello");

  const config = {
    headers: {
      Authorization: Authorization,
    },
  };
  const res = await postMethod(data, "/tasks/create", config);
  return res;
};

export const getMethod = async (link, config = {}) => {
  try {
    const res = await axios.get(backend_url + link, config);
    return res;
  } catch (error) {
    return error;
  }
};

export const patchMethod = async (data, link, config = {}) => {
  try {
    const res = await axios.patch(backend_url + link, data, config);
    return res;
  } catch (error) {
    return null;
  }
};

export const updateTask = async (token,task) => {
  const {description,completed} = task;
  const data = {
    description: description,
    completed: completed,
  };

  const Authorization = "Bearer " + token;

  const config = {
    headers: {
      Authorization: Authorization,
    },
  };
  const res = await patchMethod(data, `/tasks/update/${description}`, config);
  return res;
};

export const deleteMethod = async (link, config = {}) => {
  try {
    // console.log("try");
    const res = await axios.delete(backend_url + link, config);
    return res;
  } catch (error) {
    return error;
  }
};

export const deleteTaskMethod = async (AuthToken,description) => {
  const Authorization = "Bearer " + AuthToken;
  const config = {
    headers: {
      Authorization: Authorization,
    },
  };

  // console.log(Authorization);
  const res = await deleteMethod(`/tasks/delete/${description}`, config);
  return res;
};

export const getAllTask = async (AuthToken) => {
  const Authorization = "Bearer " + AuthToken;
  const config = {
    headers: {
      Authorization: Authorization,
    },
  };

  // console.log(Authorization);
  const res = await getMethod("/tasks/readAll", config);
  return res;
};
export const SignOutUser = () => {
  // const dispatch = useDispatch();

  postMethod({}, "/users/logout");
  // dispatch(SetCurrentUser(null));
};
