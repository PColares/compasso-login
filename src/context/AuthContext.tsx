import { createContext, useState } from "react";

interface AuthProps {
  children: any;
}

export const AuthContext = createContext({} as any);

const AuthProvider = ({ children }: AuthProps) => {
  const [auth, setAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;