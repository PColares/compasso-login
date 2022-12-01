import React from "react";
import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../Login";
import { HomePage } from "../Home";
import { GithubPage } from "../GithubPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/github" element={<GithubPage />} />
    </Routes>
  );
};
