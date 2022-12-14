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
  getAuthMessage: (code: number) => string;
};

//the auth context
export const authContext = createContext<AuthContextType>(
  {} as AuthContextType,
);

//get auth message by auth code
function getAuthMessage(code: number): string {
  //all error messages
  const ERROR_MESSAGES: { [key: number]: string } = {
    1: "The AccessToken is missing!",
    2: "The AccessToken is invalid!",
    5: "Their was an Error with the Server, try again later!",
    11: "The E-Mail, the Username (handle) or the Password is missing!",
    12: "The E-Mail has an invalid format!",
    13: "The Password is too weak (1 uppercase letter, 1 lowercase letter, 1 number, 1 special character and at least 8 characters)!",
    14: "The E-Mail is alredy used!",
    15: "The Username (handle) is alredy used!",
    21: "The E-Mail / Username (handle) or the Password is missing!",
    22: "The User does not exist!",
    23: "The Password is wrong!",
    31: "The RefreshToken is missing!",
    32: "The RefreshToken is invalid!",
    33: "The RefreshToken does not exist!",
    41: "The RefreshToken is missing!",
    42: "The RefreshToken is invalid!",
    43: "The RefreshToken does not exist!",
    51: "The RefreshToken is missing!",
    52: "The RefreshToken is invalid!",
    53: "The RefreshToken does not exist!",
  };

  return ERROR_MESSAGES[code] ? ERROR_MESSAGES[code] : "Unknown Error!";
}

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
        getAuthMessage: getAuthMessage,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
