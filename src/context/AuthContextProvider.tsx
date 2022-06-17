import Keycloak, { KeycloakConfig, KeycloakInitOptions } from "keycloak-js";
import { createContext, useEffect, useState } from "react";

const keycloakConfig: KeycloakConfig = {
  realm: "myuser",
  clientId: "myclient",
  url: "http://localhost:8180/auth",
};

const keycloakInitOptions: KeycloakInitOptions = {
  onLoad: "login-required",
};

const keycloak = Keycloak(keycloakConfig);

interface AuthContextValues {
  isAuthenticated: boolean;
  username: string;
  logout: () => void;
}

const defaultAuthContextValues: AuthContextValues = {
  isAuthenticated: false,
  username: "",
  logout: () => {},
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
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    async function initializeKeycloak() {
      console.log("initialize Keycloak");
      try {
        const isAuthenticatedResponse = await keycloak.init(
          keycloakInitOptions
        );
        if (!isAuthenticatedResponse) {
          console.log(
            "user is not yet authenticated. forwarding user to login."
          );
          keycloak.login();
        }
        console.log("user already authenticated");
        setAuthenticated(isAuthenticatedResponse);
      } catch {
        console.log("error initializing Keycloak");
        setAuthenticated(false);
      }
    }

    initializeKeycloak();
  }, []);

  useEffect(() => {
    async function loadProfile() {
      try {
        const profile = await keycloak.loadUserProfile();
        if (profile.firstName) {
          setUsername(profile.firstName);
        } else if (profile.username) {
          setUsername(profile.username);
        }
      } catch {
        console.log("error trying to load the users profile");
      }
    }
    if (isAuthenticated) {
      loadProfile();
    }
  }, [isAuthenticated]);
  
  const logout = () => {
    keycloak.logout();
  };
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, username, logout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
