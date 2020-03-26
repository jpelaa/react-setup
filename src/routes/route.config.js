import React, { lazy } from "react";

const Dashboard = lazy(() => import("layouts/Dashboard"));
const LogIn = lazy(() => import("layouts/LogIn"));
const PageNotFound = lazy(() => import("layouts/PageNotFound"));

export default [
  {
    name: "login",
    path: "/login",
    component: LogIn,
    exact: true,
    authentication: false
  },
  {
    name: "home",
    path: "/home",
    component: Dashboard,
    exact: false,
    authentication: true
  },
  {
    name: "default",
    path: ["/", "/index.html"],
    default: true
  },
  {
    name: "notfound",
    path: "*",
    component: PageNotFound,
    authentication: false
  }
];
