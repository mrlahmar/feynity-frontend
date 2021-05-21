import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Link from 'next/link'

function profile() {
    const [isAuthed, setIsAuthed] = useContext(AuthContext)
    return (
        <div style={{padding: 100}}>
            profile edit {isAuthed.authed ? isAuthed.user.learner.email : ''}
            <Link href="/signin"><a>Signin</a></Link>
        </div>
    )
}

export default profile
