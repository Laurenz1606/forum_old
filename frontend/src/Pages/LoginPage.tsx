import React, { FormEvent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Contexts/authContext";

//the login page
export default function LoginPage() {
  const { login } = useContext(authContext);

  const [loginValue, setLoginValue] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState<number>();

  async function onLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { code, err, nav } = await login({ login: loginValue, password });

    if (err) {
      setError(code);
    }

    nav();
  }

  return (
    <div>
      <h1>Login</h1>
      <Link to="/register">Register</Link>
      <form onSubmit={onLogin}>
        <input
          type="text"
          placeholder="Email oder Benutzername"
          value={loginValue}
          onChange={(e) => setLoginValue(e.target.value)}
        />
        <input
          type="password"
          placeholder="Passwort"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error ? error : ""}
    </div>
  );
}
