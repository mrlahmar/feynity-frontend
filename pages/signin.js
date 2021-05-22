import Head from 'next/head'
import Input from '../components/Input'
import Button from '../components/Button'
import styled from 'styled-components'
import {useRouter} from 'next/router'
import { AuthContext } from '../context/AuthContext'
import { useContext, useState } from 'react'
import Warning from '../components/Warning'
import withAuth from '../auth/withAuthForm'

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
function signin() {
    const [wentWrong, setWentWrong] = useState(false)
    const router = useRouter()
    const [isAuthed, setIsAuthed] = useContext(AuthContext)

    const signinUser = async event => {
        setWentWrong(false)
        event.preventDefault()

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
    
        const user = await res.json()

        // User is authenticated
        if(user.hasOwnProperty('accessToken')) {
            setIsAuthed({
                authed: true,
                user
            })
            localStorage.setItem('accessToken', user.accessToken)
            return;
        }
        
        // User is not authenticated
        setWentWrong(true)
    }

    return (
        <>
            <Head>
                <title>Sign In</title>
            </Head>
            <Main>
                <div className="container">
                    <h1>Sign In</h1>
                    {wentWrong ? <Warning /> : <></>}
                    <form onSubmit={signinUser}>
                        <Input name="email" type="email" label="Email *" placeholder="e.g name@example.com"/>
                        <Input name="password" type="password" label="Password *" placeholder="e.g ***********"/>
                        <Button text="Sign In"/>
                    </form>
                </div>
            </Main>
        </>
    )
}

export default withAuth(signin)
