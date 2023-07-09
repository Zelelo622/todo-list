import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/reset.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import TodoStore from "./store/TodoStore";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{
      todos: new TodoStore(),
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);
reportWebVitals();
