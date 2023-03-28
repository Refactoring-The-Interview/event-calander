import React, { Component, ReactElement } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "./Components/App/App";
import { ErrorPage } from "./Components/ErrorPage/ErrorPage";
import "./Sass/main.scss";

interface RouterProps {
    path: string;
    element: Component;
    errorElement: ReactElement;
    children: [];
}

const router: RouterProps | any = createBrowserRouter([
    {
        path: "*",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [],
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
