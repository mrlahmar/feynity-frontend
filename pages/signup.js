import Head from 'next/head'
import styled from 'styled-components'
import Input from '../components/Input'
import Button from '../components/Button'
import Warning from '../components/Warning'
import { AuthContext } from '../context/AuthContext'
import { useContext, useState } from 'react'
import { useRouter } from 'next/router'

const Main = styled.main`
    margin: 82px auto 0;
    display: flex;
    justify-content: center;

    .container {
        h1 {
            margin: 40px auto 20px;
            font-size: 1.8em;
        }
    }
`

function signup() {
    const [wentWrong, setWentWrong] = useState(false)
    const [isAuthed, setIsAuthed] = useContext(AuthContext)
    const router = useRouter()

    const registerUser = async event => {
        setWentWrong(false)
        event.preventDefault()

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
    
        const user = await res.json()

        // User is authenticated
        if(user.hasOwnProperty('accessToken')) {
            setIsAuthed({
                authed: true,
                user
            })
            router.push('/profile')
            return;
        }
        
        // User is not authenticated
        setWentWrong(true)
    }

    return (
        <>
            <Head>
                <title>Sign Up</title>
            </Head>
            <Main>
                <div className="container">
                    <h1>Sign Up</h1>
                    {wentWrong ? <Warning /> : <></>}
                    <form onSubmit={registerUser}>
                        <Input name="email" type="email" label="Email *" placeholder="e.g name@example.com"/>
                        <Input name="name" type="text" label="Full Name *" placeholder="e.g John Doe"/>
                        <Input name="password" type="password" label="Password *" placeholder="e.g ***********"/>
                        <Input name="repeatpassword" type="password" label="Repeat Password *" placeholder="e.g ***********"/>
                        <Button text="Sign Up"/>
                    </form> 
                </div>
            </Main>
        </>
    )
}

export default signup