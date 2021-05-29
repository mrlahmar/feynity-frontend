import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import withAuth from '../../auth/withAuth'
import Head from 'next/head'
import SideNav from '../../components/SideNav'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Step from '../../components/Step'
import TextArea from '../../components/TextArea'
import GroupCard from '../../components/GroupCard'
import GroupStyle from '../../styles/GroupStyle'


function newchallenge() {
    const [isAuthed, setIsAuthed] = useContext(AuthContext)
    return (
        <>
            <Head>
                <title>New Challenge</title>
            </Head>
            <GroupStyle>
                <SideNav />
                <div className="container">
                    <main>
                            <h1>New Challenge</h1>
                            <div className="cg-inner">
                                <form className='form' action="">
                                    <Input maxwidth="100%" name="challengename" type="text" label="Challenge Name *" placeholder="e.g Challenge X/Y"/>
                                    <Input maxwidth="100%" name="whotochallenge" type="text" label="Who to Challenge ? *" placeholder="e.g John Doe"/>
                                    <Input maxwidth="100%" name="duedate" type="date" label="Due Date *"/>
                                    <div className="steps">
                                        <label htmlFor="steps">Steps <span>  Add a step</span></label>
                                        <Step n="1" name="step1" placeholder="e.g Step 1"/>
                                        <Step n="2" name="step1" placeholder="e.g Step 2" />
                                    </div>
                                    <TextArea width="100%" height="100px" label="Edit Description" name="description" placeholder="This group is for students who started studying web dev through the JavaScript 101: Intro to Web Dev Course" />
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

export default newchallenge