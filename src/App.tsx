import React, {useContext, useEffect} from 'react'
import PrivateRoutes from "./routes/private.routes";
import PublicRoutes from "./routes/public.routes";
import { AuthContext } from './context/AuthContext';
import "./App.css";

function App() {
  const {auth} = useContext(AuthContext)
  return auth ? <PrivateRoutes /> : <PublicRoutes />;
}

export default App;
