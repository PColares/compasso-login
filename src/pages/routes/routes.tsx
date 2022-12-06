import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { LoginPage } from "../Login";
import { HomePage } from "../Home";
import { GithubPage } from "../GithubPage";
import { useLocalState } from "../utils/useLocalStorage";

export const PrivateRoute = ({ children }: any) => {
  const [form, setForm] = useLocalState("", "usuario e senha");

  return form ? children : <Navigate to="/login" />;
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/github"
        element={
          <PrivateRoute>
            <GithubPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
