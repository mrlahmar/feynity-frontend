import Head from 'next/head'
import Input from '../components/Input'
import Button from '../components/Button'
import styled from 'styled-components'
import {useRouter} from 'next/router'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

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
    const router = useRouter()
    const [isAuthed, setIsAuthed] = useContext(AuthContext)

    const signinUser = async event => {
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
    
        const result = await res.json()

        if(result.hasOwnProperty('accessToken')) {
            setIsAuthed(true)
            router.push('/profile')
        }
        
        console.log(result);
    }

    return (
        <>
            <Head>
                <title>Sign In</title>
            </Head>
            <Main>
                <div className="container">
                    <h1>Sign In</h1>
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

export default signin
