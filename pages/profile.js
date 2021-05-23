import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import withAuth from '../auth/withAuth'
import Head from 'next/head'
import SideNav from '../components/SideNav'
import Input from '../components/Input'
import Button from '../components/Button'
import ProfileStyle from '../styles/ProfileStyles/EditProfile'

function profile() {
    const [isAuthed, setIsAuthed] = useContext(AuthContext)
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
                        <form className='form' action="">
                            <img src="profile/editprofile-pic.png" alt="Profile pic" />
                            <div className="inner">
                                <Input name="email" type="email" label="Edit Email *" placeholder="e.g name@example.com"/>
                                <Input name="fullname" type="text" label="Edit Full Name *" placeholder="e.g John Doe"/>
                                <Input name="password" type="password" label="Edit Password *" placeholder="e.g ***********"/>
                                <Input name="repeatpassword" type="password" label="Repeat Password *" placeholder="e.g ***********"/>
                                <Button text="Delete My Account" color="#ED694A" bgColor="#fff" borderColor="#ED694A"/>
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
