import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage, RegisterPage, MainPage, ContentPage } from "./pages/index";
import ContentBanner from "./components/Banner/ContentBanner";
import Assignment from "./components/Assignments/Assignment";
import Quizs from "./components/Quiz/Quiz";
import Video from "./components/Videos/Video";
import ToastComponent from "./components/Toast/Toast";
import SearchBox from "./components/SearchBox";
import ShowData from "./components/ShowData";

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
    element: <ContentPage />,
  },
  {
    path: "/assignment",
    element: <Assignment />,
  },
  {
    path: "/quiz",
    element: <Quizs />,
  },
  {
    path: "/video",
    element: <Video />,
  },
  {
    path: "/toast",
    element: <ToastComponent />,
  },
  {
    path: "/search",
    element: <SearchBox />,
  },
  {
    path: "/showdata",
    element: <ShowData />,
  },
]);

const App = () => {
  return <RouterProvider router={appRoute} />;
};
export default App;
