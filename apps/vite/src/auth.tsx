import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export function signIn() {
  window.open(
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    "http://localhost:3000/api/auth/signin?" +
      new URLSearchParams({
        callbackUrl: "http://localhost:3000/auth-redirect",
      }),
  );
}

type AuthContextType = {
  token: string;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const useSession = () => {
  const value = useContext(AuthContext);
  return value;
};

export const AuthProvider = (props: { children: ReactNode }) => {
  const [token, setToken] = useState<string>();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) {
      localStorage.setItem("token", token);
      window.history.replaceState({}, document.title, "/");
      setToken(token);
    }
  }, [window.location]);

  return (
    <AuthContext.Provider value={token ? { token } : null}>
      {props.children}
    </AuthContext.Provider>
  );
};
