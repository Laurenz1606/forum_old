import React, { FormEvent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Contexts/authContext";

//the register page
export default function RegisterPage() {
  const { register } = useContext(authContext);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState<number>();

  async function onRegister(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { code, err, nav } = await register({ email, username, password });

    if (err) {
      setError(code);
    }

    nav();
  }

  return (
    <div>
      <h1>Register</h1>
      <Link to="/login">Login</Link>
      <form onSubmit={onRegister}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Benutzername"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Passwort"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      {error ? error : ""}
    </div>
  );
}
