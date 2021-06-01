import Head from 'next/head'
import styled from 'styled-components'
import Input from '../components/Input'
import Button from '../components/Button'
import Warning from '../components/Warning'
import { AuthContext } from '../context/AuthContext'
import { useContext, useState } from 'react'
import withAuth from '../auth/withAuthForm'
import AuthService from '../auth/AuthService'
import Loading from '../components/Loading'

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
    const [loading, setLoading] = useState(false)
    const {initialState, setUser, setIsAuthenticated} = useContext(AuthContext)

    const registerUser = async event => {
        setWentWrong(false)
        setLoading(true)
        event.preventDefault()
        await AuthService.signup(event,initialState, setUser, setIsAuthenticated, setWentWrong, setLoading)
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
                    {loading ? <Loading /> : <form onSubmit={registerUser}>
                        <Input name="email" type="email" label="Email *" placeholder="e.g name@example.com"/>
                        <Input name="name" type="text" label="Full Name *" placeholder="e.g John Doe"/>
                        <Input name="password" type="password" label="Password *" placeholder="e.g ***********"/>
                        <Input name="repeatpassword" type="password" label="Repeat Password *" placeholder="e.g ***********"/>
                        <Button text="Sign Up"/>
                    </form>}
                </div>
            </Main>
        </>
    )
}

export default withAuth(signup)