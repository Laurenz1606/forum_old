import { setConfig } from "@authfunctions/react";
import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";

async function init() {
  //define default url as null
  let url = null;

  //check if in dev mode
  if (process.env.NODE_ENV === "development") {
    //set url to env var defined in dev mode
    url = process.env.REACT_APP_DEV_BACKEND;
  } else {
    try {
      //fetch url from /api_url route
      const fetchedUrl = await fetch("/api_url").then((res) => res.json());

      //set url to fetched url
      url = fetchedUrl.url;
    } catch (err) {
      //log error
      console.log(err);
    }
  }

  //check if url was found
  if (url) {
    // set the config of authfunction
    setConfig(url + "/api", url + "/auth");

    //render react
    const root = ReactDOM.createRoot(
      document.getElementById("root") as HTMLElement,
    );
    root.render(
      <React.StrictMode>
        <Router />
      </React.StrictMode>,
    );
  }
}

init();
