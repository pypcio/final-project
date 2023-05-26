import React from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App";
import "./styles/index.css";
import "tachyons";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Index from "./routes";
import SignIn, { action as signInAction } from "./routes/SignIn";
import Layout from "./components/layout/layout";
import Register, { action as registerAction } from "./routes/Register";
const root = createRoot(document.getElementById("root"));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Index />} />
      <Route path="signIn" element={<SignIn />} action={signInAction} />
      <Route path="home" element={<App />} />
      <Route path="register" element={<Register />} action={registerAction} />
    </Route>
  )
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
