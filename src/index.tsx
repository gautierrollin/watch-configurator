import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const config = {
  integrationUrl : "https://public.apviz.io/showcases/U0hPVzpWZmprdDdwUm51/releases/UkVMUzp1dFpZUUhTRld4/main.js",
  defaultConfiguration : {
    dial : "white",
    strap_finished : "leather_black",
    watch_finished : "black"
  }
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      integrationUrl={config.integrationUrl}
      defaultConfiguration={config.defaultConfiguration}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
