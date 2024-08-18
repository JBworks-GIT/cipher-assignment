import React from "react";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import appStore from "./store/appStore";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import CreateTest from "./components/CreateTest";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <>
        <Navbar />
        <Login />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <Navbar />
        <Signup />
      </>
    ),
  },
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/createtest",
    element: (
      <>
        <Navbar />
        <CreateTest />
      </>
    ),
  },
]);

const App = () => {
  return (
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
