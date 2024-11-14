// AuthContext.js
import React, { createContext, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const verifyToken = async () => {
            const token = localStorage.getItem('authToken');
            if (token) {
                try {
                    const response = await fetch('http://localhost:3010/auth/verify-token', {
                        method: 'GET',
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        }
                    });
    
                    console.log("Resposta da verificação:", response.status); // Adicione esta linha para ver o status da resposta
    
                    if (response.status === 401) {
                        console.log("Token inválido ou expirado. Removendo...");
                        localStorage.removeItem('authToken');
                        navigate('/login');
                    }
                } catch (error) {
                    console.error("Erro ao verificar o token", error);
                    localStorage.removeItem('authToken');
                    navigate('/login');
                }
            } else {
                navigate('/login');
            }
        };
    
        verifyToken();
    }, [navigate]);
    
    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
