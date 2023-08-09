import { toast } from "react-toastify";
import { userLogin, userRegister } from "../redux/features/auth/authActions";
import store from "../redux/store";

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return toast("All fields are mandatory");
    }
    store.dispatch(userLogin({ email, password, role }));
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
  e,
  name,
  email,
  role,
  password,
  organizationName,
  hospitalName,
  website,
  address,
  phone
) => {
  e.preventDefault();
  try {
    store.dispatch(
      userRegister({
        name,
        email,
        role,
        password,
        organizationName,
        hospitalName,
        website,
        address,
        phone,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
