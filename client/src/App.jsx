import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage, RegisterPage, MainPage, ContentPage } from "./pages/index";
import ContentBanner from "./components/Banner/ContentBanner";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/mainpage",
    element: <MainPage />,
  },
  {
    path: "/contentpage",
    element: <ContentPage/>,
  }
]);

const App = () => {
  return <RouterProvider router={appRoute} />;
};
export default App;
