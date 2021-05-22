import Navbar from "./Navbar"
import { useContext, useEffect } from 'react'
import { AuthContext } from "../context/AuthContext"

const Layout = ({children}) => {
    const [isAuthed, setIsAuthed] = useContext(AuthContext)

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
            }
        }
    }, [])

    return (
        <>
            <Navbar/>
            {children}  
        </>
    )
}


export default Layout