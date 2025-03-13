import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LoaderWrapper from "./Components/LoaderWrapper.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoaderWrapper>
      <App />
    </LoaderWrapper>
  </StrictMode>
);
