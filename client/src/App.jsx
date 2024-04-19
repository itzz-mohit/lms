import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage, RegisterPage, MainPage, ContentPage } from "./pages/index";
import ContentBanner from "./components/Banner/ContentBanner";
import Assignment from "./components/Assignments/Assignment";
import Quizs from "./components/Quiz/Quiz";
import Video from "./components/Videos/Video";

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
  },
  {
    path: "/assignment",
    element: <Assignment/>
  },
  {
    path: "/quiz",
    element: <Quizs/>
  },
  {
    path: "/video",
    element: <Video/>
  }
]);

const App = () => {
  return <RouterProvider router={appRoute} />;
};
export default App;
