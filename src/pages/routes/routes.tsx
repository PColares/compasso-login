import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { LoginPage } from "../Login";
import { HomePage } from "../Home";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/home" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  );
};
