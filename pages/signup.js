import Head from 'next/head'
import styled from 'styled-components'
import Input from '../components/Input'
import Button from '../components/Button'

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
    return (
        <>
            <Head>
                <title>Sign Up</title>
            </Head>
            <Main>
                <div className="container">
                    <h1>Sign Up</h1>
                    <form action="/signup" method="post">
                        <Input name="email" type="email" label="Email *" placeholder="e.g name@example.com"/>
                        <Input name="fullname" type="text" label="Full Name *" placeholder="e.g John Doe"/>
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
