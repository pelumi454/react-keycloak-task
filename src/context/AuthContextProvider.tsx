import { createContext, useState } from "react";
interface AuthContextValues {
  isAuthenticated: boolean;
}
const defaultAuthContextValues: AuthContextValues = {
  isAuthenticated: false,
};

export const AuthContext = createContext<AuthContextValues>(
  defaultAuthContextValues
);

interface AuthContextProviderProps {
  children: JSX.Element;
}
const AuthContextProvider = (props: AuthContextProviderProps) => {
  console.log("rendering AuthContextProvider");
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
