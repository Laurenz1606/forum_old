import React, { useContext, useState } from "react";
import { authContext } from "../Contexts/authContext";

//the dashboard page
export default function DashboardPage() {
  const { logout } = useContext(authContext);

  const [error, setError] = useState<number>();

  async function onLogout() {
    const { code, err, nav } = await logout();

    if (err) {
      setError(code);
    }

    nav();
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={onLogout}>Logout</button>
      {error ? error : ""}
    </div>
  );
}
