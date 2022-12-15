import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../Contexts/authContext";

//the dashboard page
export default function DashboardPage() {
  const { logout, fetch } = useContext(authContext);
  const [data, setData] = useState<any>({ data: { data: {} } });

  const [error, setError] = useState<number>();

  useEffect(() => {
    (async () => {
      const data = await fetch("/user/infos");
      setData(data);
    })();
  }, []);

  async function onLogout() {
    const { code, err, nav } = await logout();

    if (err) {
      setError(code);
    }

    nav();
  }

  return (
    <div>
      <h1>
        Dashboard {data.data.data.fullname} ({data.data.data.username})
      </h1>
      <button onClick={onLogout}>Logout</button>
      {error ? error : ""}
    </div>
  );
}
