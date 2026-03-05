import { useState, type ReactNode } from "react";
import type { User } from "../types";

import { AuthContext } from "./AuthContextValue";
// ...existing code...

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => setUser(user);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ...existing code...
