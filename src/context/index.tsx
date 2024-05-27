"use client";
import { User } from "@/types";
import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(undefined);

const emptyUser: User = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
};

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState<User>(emptyUser);

  return (
    <AppContext.Provider
      value={{
        token,
        setToken,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
