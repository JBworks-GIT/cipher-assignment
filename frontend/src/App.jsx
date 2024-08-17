import React from 'react';
import Login from './pages/login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from './pages/signup';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup/>,
    },
])


return <RouterProvider router={router} />;
}


export default App;
