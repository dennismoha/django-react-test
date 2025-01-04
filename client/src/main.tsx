import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import StoreProvider from "./store/store.tsx";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
    <RouterProvider router={AppRouter} />
    </StoreProvider>
  </StrictMode>
);
