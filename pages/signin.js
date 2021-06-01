import Head from 'next/head'
import Input from '../components/Input'
import Button from '../components/Button'
import styled from 'styled-components'
import { AuthContext } from '../context/AuthContext'
import { useContext, useState } from 'react'
import Warning from '../components/Warning'
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
function signin() {
    const [wentWrong, setWentWrong] = useState(false)
    const [loading, setLoading] = useState(false)
    const {initialState, setUser, setIsAuthenticated} = useContext(AuthContext)

    const signinUser = async event => {
        setWentWrong(false)
        setLoading(true)
        event.preventDefault()
        await AuthService.signin(event,initialState, setUser, setIsAuthenticated, setWentWrong, setLoading)
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
                    {loading ? <Loading /> : <form onSubmit={signinUser}>
                        <Input name="email" type="email" label="Email *" placeholder="e.g name@example.com"/>
                        <Input name="password" type="password" label="Password *" placeholder="e.g ***********"/>
                        <Button text="Sign In"/>
                    </form> }
                </div>
            </Main>
        </>
    )
}

export default withAuth(signin)
