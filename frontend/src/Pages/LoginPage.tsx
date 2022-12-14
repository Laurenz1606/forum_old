import React, { FormEvent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthLoginValueInputComponent from "../Components/Auth/AuthLoginValueInputComponent";
import AuthPasswordInputComponent from "../Components/Auth/AuthPasswordInputComponent";
import AuthSubmitButtonComponent from "../Components/Auth/AuthSubmitButtonComponent";
import { authContext } from "../Contexts/authContext";
import AuthFormLayout, { IAuthError } from "../Layouts/AuthFormLayout";

//the login page
export default function LoginPage() {
  //auth functions
  const { login, getAuthMessage } = useContext(authContext);

  //user inputs
  const [loginValue, setLoginValue] = useState("");
  const [password, setPassword] = useState("");

  //auth error
  const [error, setError] = useState<IAuthError>({
    err: false,
    code: 0,
    msg: "",
  });

  //login function
  async function onLogin(e: FormEvent<HTMLFormElement>) {
    //prevent default form action
    e.preventDefault();

    //login user
    const { code, err, nav } = await login({ login: loginValue, password });

    //check if login errored
    if (err) {
      //set error
      setError({ code, err, msg: getAuthMessage(code) });
    }

    //navigate if needed
    nav();
  }

  return (
    <AuthFormLayout
      error={error}
      onSubmit={onLogin}
      page="Login"
      secondary={
        <span>
          Don't have an Account? <Link to="/register">Register here</Link>
        </span>
      }
    >
      <AuthLoginValueInputComponent
        loginValue={loginValue}
        setLoginValue={setLoginValue}
      />
      <AuthPasswordInputComponent
        password={password}
        setPassword={setPassword}
        showResetTip
      />
      <AuthSubmitButtonComponent />
    </AuthFormLayout>
  );
}
