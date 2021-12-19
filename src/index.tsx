import React from "react";
import ReactDOM from "react-dom";
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

ReactDOM.render(
  <React.StrictMode>
    <App
      integrationUrl={config.integrationUrl}
      defaultConfiguration={config.defaultConfiguration}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
