import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MetadataContextProvider } from "./context/MetaDataContext.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MetadataContextProvider>
        <App />
      </MetadataContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
