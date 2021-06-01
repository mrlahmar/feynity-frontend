export default {
    /* 
        Sign in
    */
    signin: async (event,initialState, setUser, setIsAuthenticated, setWentWrong, setLoading) => {
        try {
            // fetch endpoint
            const res = await fetch(
                'http://localhost:5000/api/v1/learners/signin',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: event.target.email.value,
                        password: event.target.password.value
                    })
                }
            )
        
            // parse to json
            const fetchedUser = await res.json()
    
            // User is authenticated
            if(res.status === 200 && fetchedUser.hasOwnProperty('accessToken') && fetchedUser.hasOwnProperty('userData')) {
                setLoading(false)
                setIsAuthenticated(true)
                setUser(fetchedUser)
                localStorage.setItem('accessToken', fetchedUser.accessToken)
                return;
            } else {
                // User is not authenticated
                setLoading(false)
                setWentWrong(true)
                setIsAuthenticated(false)
                setUser(initialState)
                localStorage.removeItem('accessToken')
            }
            
        } catch (error) {
            // User is not authenticated
            setLoading(false)
            setWentWrong(true)
            setIsAuthenticated(false)
            setUser(initialState)
            localStorage.removeItem('accessToken')
        }
    },

    /*
        Sign up
    */
    signup: async  (event,initialState, setUser, setIsAuthenticated, setWentWrong, setLoading) => {
        try {
            // fetch endpoint
            const res = await fetch(
                'http://localhost:5000/api/v1/learners/signup',
                {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: event.target.email.value,
                        name: event.target.name.value,
                        password: event.target.password.value,
                        rpassword: event.target.repeatpassword.value
                    })
                }
            )
        
            // parse to json
            const fetchedUser = await res.json()
    
            // User is authenticated
            if(res.status === 200 && fetchedUser.hasOwnProperty('accessToken') && fetchedUser.hasOwnProperty('userData')) {
                setLoading(false)
                setIsAuthenticated(true)
                setUser(fetchedUser)
                localStorage.setItem('accessToken', fetchedUser.accessToken)
                return;
            } else {
                // User is not authenticated
                setLoading(false)
                setWentWrong(true)
                setIsAuthenticated(false)
                setUser(initialState)
                localStorage.removeItem('accessToken')
            }
            
        } catch (error) {
            // User is not authenticated
            setLoading(false)
            setWentWrong(true)
            setIsAuthenticated(false)
            setUser(initialState)
            localStorage.removeItem('accessToken')
        }
    },

    /*
        Logout
    */

    logout: (router, initialState, setIsAuthenticated, setUser) => {
        router.replace("/signin")
        setIsAuthenticated(false)
        setUser(initialState)
        localStorage.removeItem('accessToken')
    }
}