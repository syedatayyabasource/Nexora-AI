<<<<<<< HEAD
import {StrictMode} from "react"; import {createRoot} from "react-dom/client"; import {BrowserRouter} from "react-router-dom"; import App from "./App"; import "./index.css";
createRoot(document.getElementById("root")).render(<StrictMode><BrowserRouter><App/></BrowserRouter></StrictMode>);
=======
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
>>>>>>> dcca521e1fb2836113d51c8b4de9cc837f07b23b
