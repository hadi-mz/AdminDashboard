"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

interface UserContextType {
  user: string;
  setUser: (user: string) => void;
}
const userContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState("");
  const handelUserChange = () => {
    const storedUser = JSON.parse(localStorage.getItem("user") ?? "null");
    if(storedUser) {
      setUser(storedUser);
    }
  };

  useEffect(() => {
    handelUserChange();
  }, [user]);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}

export function useUser() {
  const context = useContext(userContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
