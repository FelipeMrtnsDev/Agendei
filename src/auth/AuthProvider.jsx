import React, { createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const verifyToken = async () => {
      const publicPaths = ["/login", "/register"]; // rotas que não exigem auth
      if (publicPaths.includes(location.pathname)) {
        return; // Não redireciona nessas páginas
      }
  
      const token = localStorage.getItem("authToken");
      if (token) {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_API_URL}/auth/verify-token`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.status === 401) {
            localStorage.removeItem("authToken");
            navigate("/login");
          }
        } catch (error) {
          localStorage.removeItem("authToken");
          navigate("/login");
        }
      } else {
        navigate("/login");
      }
    };
  
    verifyToken();
  }, [location.pathname, navigate]);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
