import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { getAuth } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export  const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null) 
    const [loading,setLoading] = useState(false)
    
    const AuthInfo = {
        user
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;