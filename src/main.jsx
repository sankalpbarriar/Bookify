import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; 
import { FirebaseProvider } from "./context/Firebase";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <FirebaseProvider>
      <App />
      {/*  mere app ke jitne bhi component homge unke paas mere firebase context ka access hoga */}
    </FirebaseProvider>
    </BrowserRouter>
  </React.StrictMode>
);
