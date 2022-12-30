import  axios  from "axios";
import { backend_url } from "../../assests/backend";
export const postMethod = async(data,link) => {
    try {
        const res = await axios.post(backend_url + link, data);
        return res;
    } catch (error) {
        return null;
    }
}

export const SignOutUser = () => {
    // const dispatch = useDispatch();

    postMethod({}, "/users/logout");
    // dispatch(SetCurrentUser(null));
}