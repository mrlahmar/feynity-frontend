import React, {useState, createContext} from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isAuthed, setIsAuthed] = useState({
        authed: false,
        user: {}
    });

    return (
        <AuthContext.Provider value={[isAuthed, setIsAuthed]}>
            {children}
        </AuthContext.Provider>
    );
}