import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./assets/components/root/Root.jsx";
import About from "./assets/components/about/About.jsx";
import Hero from "./assets/components/hero/Hero.jsx";
import State from "./assets/components/state/State.jsx";
import Home from "./assets/components/home/Home.jsx";
import Users from "./assets/components/users/Users.jsx";
import Todo from "./assets/components/todo/Todo.jsx";
import UserDetails from "./assets/components/UserDetails/UserDetails.jsx";

const usersDataRes = fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json());
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, path: "/about", Component: About },
      { path: "hero", Component: Hero },
      { path: "state", Component: State },
      { path: "/", Component: Home },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "todo",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Todo usersDataRes={usersDataRes}></Todo>
          </Suspense>
        ),
      },
      {
        path: "users/user/:id",
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        Component: UserDetails,
      },
    ],
  },
  {
    path: "app",
    Component: App,
  },
  {
    path: "about",
    element: <p>I am about section</p>,
  },
  {
    path: "*",
    element: <p>Not Found 404!!!!!</p>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
