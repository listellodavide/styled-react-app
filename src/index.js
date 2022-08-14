import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./fonts/kaushan.css"
import App from "./components/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);