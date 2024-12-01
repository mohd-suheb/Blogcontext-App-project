import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Appcontextprovider from "./context/Appcontext"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Appcontextprovider >
    <App />
  </Appcontextprovider >
);