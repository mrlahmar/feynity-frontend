import { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import withAuth from '../auth/withAuth'
import Head from 'next/head'
import SideNav from '../components/SideNav'
import Input from '../components/Input'
import Button from '../components/Button'
import Warning from '../components/Warning'
import ProfileStyle from '../styles/ProfileStyles/EditProfile'
import { useRouter } from 'next/router'
import Profile from '../utils/Profile'
import Loading from '../components/Loading'

function profile() {
    const {initialState, user, setUser, setIsAuthenticated} = useContext(AuthContext)
    const router = useRouter()
    const [wentWrong, setWentWrong] = useState(false)
    const [loading, setLoading] = useState(false)

    const deleteAccount = async () => {
        setWentWrong(false)
        setLoading(true)
        await Profile.deleteAccount(router, initialState, user, setUser, setIsAuthenticated, setWentWrong, setLoading)
    }
    
    const updateAccount = async event => {
        setWentWrong(false)
        setLoading(true)
        event.preventDefault()
        await Profile.updateAccount(event, router, initialState, user, setUser, setIsAuthenticated, setWentWrong, setLoading)
    }

    return (
        <>
            <Head>
                <title>Edit Profile</title>
            </Head>
            <ProfileStyle>
                <SideNav />
                <main>
                    <div className="container">
                        <h1>Edit Profile</h1>
                        {wentWrong ? <Warning /> : <></>}
                        {loading ? <Loading /> : <form className='form' onSubmit={updateAccount}>
                            <img className='profilepic' src="/profile.png" alt="Profile pic" />
                            <div className="inner">
                                <Input req={false} name="email" type="email" label="Edit Email *" placeholder="e.g name@example.com"/>
                                <Input req={false} name="name" type="text" label="Edit Full Name *" placeholder="e.g John Doe"/>
                                <Input req={false} name="password" type="password" label="Edit Password *" placeholder="e.g ***********"/>
                                <Input req={false} name="repeatpassword" type="password" label="Repeat Password *" placeholder="e.g ***********"/>
                                <Button type="button" text="Delete My Account" color="#ED694A" bgColor="#fff" borderColor="#ED694A" onClick={deleteAccount}/>
                                <Button text="Update My Profile"/>
                            </div>
                        </form> }
                    </div>
                </main>
            </ProfileStyle>
        </>
    )
}

export default withAuth(profile)
