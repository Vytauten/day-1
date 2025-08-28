import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import App from "./App";
import { JobContextProvider } from "./context/JobContext.js";
import { AuthContextProvider } from "./context/AuthContext.js";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <JobContextProvider>
        <App />
      </JobContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
