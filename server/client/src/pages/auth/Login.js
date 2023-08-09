import React from "react";
//import InputType from "../../components/shared/form/InputType";
import Form from "../../components/shared/form/Form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "../../components/shared/Spinner";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{toast(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-8 form-banner">
            <img src="./assets/images/banner1.jpg" alt="bannerImg" />
          </div>
          <div className="col-md-4 form-container">
            <Form formTitle={"Login"} submitBtn={"Login"} formType={"login"} />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
