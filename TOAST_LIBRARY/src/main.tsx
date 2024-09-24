import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./index.css";
import Toast from "./Toast.js";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
        <Toast />
    </StrictMode>
);
