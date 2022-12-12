import {
  FetchFunction,
  LoggedInFunction,
  LoginFunction,
  LogoutFunction,
  RegisterFunction,
  useFetch,
  useLoggedIn,
  useLogin,
  useLogout,
  useRegister,
} from "@authfunctions/react";
import { createContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

//the props for the context provider component
type AuthContextProps = {
  children: ReactNode | ReactNode[];
};

//type for the auth context
export type AuthContextType = {
  fetch: FetchFunction;
  loggedIn: LoggedInFunction;
  login: LoginFunction;
  logout: LogoutFunction;
  register: RegisterFunction;
};

//the auth context
export const authContext = createContext<AuthContextType>(
  {} as AuthContextType,
);

//the component providing the auth context
export default function AuthContext({ children }: AuthContextProps) {
  //navigator
  const navigate = useNavigate();

  //auth methods
  const fetch = useFetch(navigate);
  const loggedIn = useLoggedIn(navigate);
  const login = useLogin(navigate);
  const logout = useLogout(navigate);
  const register = useRegister(navigate);

  return (
    <authContext.Provider
      value={{
        fetch,
        loggedIn,
        login,
        logout,
        register,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
