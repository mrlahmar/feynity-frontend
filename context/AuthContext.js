import React, {useState, createContext, useEffect} from 'react'
import Loading from '../components/Loading';

const initialState = {
    userData: {
        name: null,
        email: null,
        points: null
    },
    accessToken: null
}

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(initialState)
    
    // load user on page load
    useEffect(() => {
        const fetchUser = async () => {
            // get token from localstorage
            const token = localStorage.getItem('accessToken')
            if (token !== null) {
                try {
                    // fetch user using the stored token
                    const result = await fetch('http://localhost:5000/api/v1/learners/get', {
                        method: 'POST',
                        headers: {
                            'Context-Type': 'application/json',
                            'x-auth-token': token
                        }
                    })

                    // parse data to json
                    const fetchedUser = await result.json()
                    
                    if (result.status === 200 && fetchedUser.hasOwnProperty('userData')) {
                        // add the accessToken to fetchedUser object
                        fetchedUser.accessToken = token

                        // set the state to the fetched user
                        setIsAuthenticated(true)
                        setUser(fetchedUser)
                        
                        // load the page
                        setLoading(false)
                    } else {
                        // in case a bad request happened

                        // remove token from local storage
                        localStorage.removeItem('accessToken')

                        // set user to unauthenticated
                        setIsAuthenticated(false)
                        setUser(initialState)

                        // load page
                        setLoading(false)
                    }
                } catch (error) {  
                    // an error
                    // remove token from local storage
                    localStorage.removeItem('accessToken')

                    // set user to unauthenticated
                    setIsAuthenticated(false)
                    setUser(initialState)

                    // load page
                    setLoading(false)
                }
            }

            // load page
            setLoading(false)
        }

        // trigger the function
        fetchUser()
    }, [])
    

    return (
        loading 
        ?   <Loading />
        :   <AuthContext.Provider value={{initialState, isAuthenticated, setIsAuthenticated, user, setUser}}>
                {children}
            </AuthContext.Provider>
    );
}