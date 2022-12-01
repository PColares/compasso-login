import React, { useContext, useEffect } from "react";
import { AppRoutes } from "./pages/routes/routes";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from './styles/global'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
