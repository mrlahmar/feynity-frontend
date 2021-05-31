import React, {useState, createContext, useEffect} from 'react'
import Loading from '../components/Loading';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isAuthed, setIsAuthed] = useState({
        authed: false,
        user: {
            learner: {
                name: "",
                email: "",
                points: 0
            }
        }
    });
    const [loading, setLoading] = useState(true)

    useEffect(async () => {
        const token = localStorage.getItem('accessToken')
        if (token !== null) {
            const result = await fetch('http://localhost:5000/api/v1/learners/get', {
                method: 'POST',
                headers: {
                    'Context-Type': 'application/json',
                    'x-auth-token': token
                }
            })

            const user = await result.json()
            
            if (user.hasOwnProperty('learner')) {
                user.accessToken = token
                setIsAuthed({authed: true, user: user})
                setLoading(false)
            }
        }

        setLoading(false)
    }, [])

    return (
        loading ? <Loading />
        : <AuthContext.Provider value={[isAuthed, setIsAuthed]}>
            {children}
        </AuthContext.Provider>
    );
}