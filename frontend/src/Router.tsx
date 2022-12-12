import { Guard } from "@authfunctions/react";
import React from "react";
import {
  BrowserRouter,
  IndexRouteProps,
  Navigate,
  Outlet,
  PathRouteProps,
  Route,
  Routes,
} from "react-router-dom";
import AuthContext from "./Contexts/authContext";
import SidebarLayout from "./Layouts/SidebarLayout";
import DashboardPage from "./Pages/DashboardPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

type TRoute = IndexRouteProps | PathRouteProps;

const routes: TRoute[] = [{ index: true, element: <DashboardPage /> }];
const redirects: { from: string; to: string }[] = [
  { from: "/dashboard", to: "/" },
];

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <AuthContext>
              <Outlet />
            </AuthContext>
          }
        >
          {/* define all redirects */}
          {redirects.map(({ from, to }, idx) => (
            <Route path={from} element={<Navigate to={to} />} key={idx} />
          ))}
          {/* login page (only logged out) */}
          <Route
            path="/login"
            element={
              <Guard type="LoggedOutOnly">
                <LoginPage />
              </Guard>
            }
          />
          {/* register page (only logged out) */}
          <Route
            path="/register"
            element={
              <Guard type="LoggedOutOnly">
                <RegisterPage />
              </Guard>
            }
          />
          {/* all other pages (only logged in) */}
          <Route
            path="/"
            element={
              <Guard type="LoggedInOnly">
                <SidebarLayout>
                  <Outlet />
                </SidebarLayout>
              </Guard>
            }
          >
            {routes.map((route, idx) => (
              <Route {...route} key={idx} />
            ))}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
