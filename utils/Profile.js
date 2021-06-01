export default {
    deleteAccount: async (router, initialState, user, setUser, setIsAuthenticated, setWentWrong, setLoading) => {
        try {
            // fetch end point
            const res = await fetch(
                'http://localhost:5000/api/v1/learners/delete',
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': user.accessToken
                    }   
                }
            )
                
            // verify request status
            if (res.status === 200) {
                localStorage.removeItem('accessToken')
                setLoading(false)
                setIsAuthenticated(false)
                setUser(initialState)
                router.replace('/signin')
            } else {
                setLoading(false)
                setWentWrong(true)
            }   
        } catch (error) {
            // catch error
            setLoading(false)
            setWentWrong(true)
        }
    },

    updateAccount: async (event, router, initialState, user, setUser, setIsAuthenticated, setWentWrong, setLoading) => {
        try {
            // fetch endpoint
            const res = await fetch(
                'http://localhost:5000/api/v1/learners/update',
                {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': user.accessToken
                    }, 
                    body: JSON.stringify({
                        email: event.target.email.value,
                        name: event.target.name.value,
                        password: event.target.password.value,
                        rpassword: event.target.repeatpassword.value
                    })
                }
            )
                
            // verify request status
            if (res.status === 200) {
                localStorage.removeItem('accessToken')
                setLoading(false)
                setIsAuthenticated(false)
                setUser(initialState)
                router.replace('/signin')
            } else {
                setLoading(false)
                setWentWrong(true)
            }
        } catch (error) {
            // catch error
            setLoading(false)
            setWentWrong(true)
        }
    }
}