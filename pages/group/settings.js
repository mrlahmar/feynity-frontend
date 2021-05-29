import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import withAuth from '../../auth/withAuth'
import Head from 'next/head'
import SideNav from '../../components/SideNav'
import Input from '../../components/Input'
import Button from '../../components/Button'
import TextArea from '../../components/TextArea'
import GroupCard from '../../components/GroupCard'
import GroupStyle from '../../styles/GroupStyle'

function settings() {
    const [isAuthed, setIsAuthed] = useContext(AuthContext)
    return (
        <>
            <Head>
                <title>Group Settings</title>
            </Head>
            <GroupStyle>
                <SideNav />
                <div className="container">
                    <main>
                            <h1>Group Settings</h1>
                            <div className="cg-inner">
                                <form className='form' action="">
                                    <Input maxwidth="100%" name="groupname" type="text" label="Edit Group Name *" placeholder="e.g Tunisian Python Community"/>
                                    <Input maxwidth="100%" name="coursetitle" type="text" label="Edit Course Title *" placeholder="e.g Python for Everyone"/>
                                    <TextArea width="100%" label="Edit Description" name="description" placeholder="This group is for students who started studying web dev through the JavaScript 101: Intro to Web Dev Course" />
                                    <Button text="Update"/>
                                </form>
                            </div>
                    </main>
                    <aside className="suggested">
                        <h3>Suggested Groups</h3>
                        <GroupCard />
                    </aside>
                </div>
            </GroupStyle>
        </>
    )
}

export default settings