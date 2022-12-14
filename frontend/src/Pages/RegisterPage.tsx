import React, { FormEvent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthEmailInputComponent from "../Components/Auth/AuthEmailInputComponent";
import AuthPasswordInputComponent from "../Components/Auth/AuthPasswordInputComponent";
import AuthSubmitButtonComponent from "../Components/Auth/AuthSubmitButtonComponent";
import AuthUsernameInputComponent from "../Components/Auth/AuthUsernameInputComponent";
import { authContext } from "../Contexts/authContext";
import AuthFormLayout, { IAuthError } from "../Layouts/AuthFormLayout";

//the register page
export default function RegisterPage() {
  //auth functions
  const { register, login, getAuthMessage } = useContext(authContext);

  //user inputs
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //auth error
  const [error, setError] = useState<IAuthError>({
    err: false,
    code: 0,
    msg: "",
  });

  //register function
  async function onRegister(e: FormEvent<HTMLFormElement>) {
    //prevent default form action
    e.preventDefault();

    //register user
    const { code, err, nav } = await register({ email, username, password });

    //check if register errored
    if (err) {
      //set error
      setError({ code, err, msg: getAuthMessage(code) });
    } else {
      //try and login new user
      const {
        code: code2,
        err: err2,
        nav: nav2,
      } = await login({ login: email, password });

      //set error
      setError({ code: code2, err: err2, msg: getAuthMessage(code2) });

      //navigate if needed
      return nav2();
    }

    //navigate if needed
    nav();
  }

  return (
    <AuthFormLayout
      error={error}
      onSubmit={onRegister}
      page="Register"
      secondary={
        <span>
          Alredy have an Account? <Link to="/login">Login here</Link>
        </span>
      }
    >
      <AuthEmailInputComponent email={email} setEmail={setEmail} />
      <AuthUsernameInputComponent
        username={username}
        setUsername={setUsername}
      />
      <AuthPasswordInputComponent
        password={password}
        setPassword={setPassword}
      />
      <AuthSubmitButtonComponent />
    </AuthFormLayout>
  );
}
