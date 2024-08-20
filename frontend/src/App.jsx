import React from "react";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { Provider, useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import appStore from "./store/appStore";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import CreateTest from "./components/CreateTest";
import AttemptTest from "./components/AttemptTest";
import CategoryMcq from "./components/CategoryMcq";
import Fundamentalmcq from "./components/Fundamentalmcq";

const AppRoutes = () => {
  const { isAuthorized } = useSelector((state) => state.auth);

  const router = createBrowserRouter([
    {
      path: "/login",
      element: isAuthorized ? (
        <>
          <Home />
        </>
      ) : (
        <Login />
      ),
    },
    {
      path: "/signup",
      element: isAuthorized ? <Home /> : <Signup />,
    },
    {
      path: "/",
      element: (
        <>
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
    {
      path: "/attempttest",
      element: (
        <>
          <Navbar />
          <AttemptTest />
        </>
      ),
    },
    {
      path: "/categorymcq",
      element: (
        <>
          <CategoryMcq/>
        </>
      ),
    },
    {
      path: "/fundamentalmcq",
      element: (
        <>
          <Fundamentalmcq/>
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

const App = () => {
  return (
    <Provider store={appStore}>
      <AppRoutes />
    </Provider>
  );
};

export default App;
