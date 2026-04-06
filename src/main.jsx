import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./assets/components/root/Root.jsx";
import About from "./assets/components/about/About.jsx";
import Hero from "./assets/components/hero/Hero.jsx";
import State from "./assets/components/state/State.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, path: "/about", Component: About },
      { path: "hero", Component: Hero },
      { path: "state", Component: State },
    ],
  },
  // {
  //   path: "app",
  //   Component: App,
  // },
  // {
  //   path: "about",
  //   element: <p>I am about section</p>,
  // },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
