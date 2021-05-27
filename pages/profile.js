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

function profile() {
    const [isAuthed, setIsAuthed] = useContext(AuthContext)
    const router = useRouter()
    const [wentWrong, setWentWrong] = useState(false)

    const deleteAccount = async () => {
        setWentWrong(false)
        const res = await fetch(
            'http://localhost:5000/api/v1/learners/delete',
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': isAuthed.user.accessToken
                }   
            }
        )

        if (res.status === 200) {
            localStorage.removeItem('accessToken')
            setIsAuthed({isAuthed: false, user: {}})
            router.replace('/')
        } else {
            setWentWrong(true)
        }
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
                        <form className='form' action="">
                            <img className='profilepic' src="profile/editprofile-pic.png" alt="Profile pic" />
                            <div className="inner">
                                <Input name="email" type="email" label="Edit Email *" placeholder="e.g name@example.com"/>
                                <Input name="fullname" type="text" label="Edit Full Name *" placeholder="e.g John Doe"/>
                                <Input name="password" type="password" label="Edit Password *" placeholder="e.g ***********"/>
                                <Input name="repeatpassword" type="password" label="Repeat Password *" placeholder="e.g ***********"/>
                                <Button type="button" text="Delete My Account" color="#ED694A" bgColor="#fff" borderColor="#ED694A" onClick={() => deleteAccount()}/>
                                <Button text="Update My Profile"/>
                            </div>
                        </form>
                    </div>
                </main>
            </ProfileStyle>
        </>
    )
}

export default withAuth(profile)
