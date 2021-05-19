import Head from 'next/head'
import Input from '../components/Input'
import Button from '../components/Button'
import styled from 'styled-components'

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
    return (
        <>
            <Head>
                <title>Sign In</title>
            </Head>
            <Main>
                <div className="container">
                    <h1>Sign In</h1>
                    <form action="/signin" method="post">
                        <Input name="emailusername" type="text" label="Email or Password *" placeholder="e.g name@example.com"/>
                        <Input name="password" type="password" label="Password *" placeholder="e.g ***********"/>
                        <Button text="Sign In"/>
                    </form>
                </div>
            </Main>
        </>
    )
}

export default signin
